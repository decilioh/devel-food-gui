import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { uploadImage } from '../../hooks/useFireStorage';
import { registerDish } from '../../services/registerDish';
import { useNavigate } from 'react-router-dom';

jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn(),
    },
}));

jest.mock('../../hooks/useFireStorage', () => ({
    uploadImage: jest.fn(),
}));

jest.mock('../../services/registerDish', () => ({
    registerDish: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('handleSubmitForm', () => {
    const mockSetImageBackground = jest.fn();
    const mockNavigate = jest.fn();

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    });

    const handleSubmitForm = async (data: any) => {
        try {
            const restaurantId = 2;
            const photoURL = await uploadImage(data.photoDish[0]);

            const newDish = {
                dishName: data.nameDish,
                description: data.descriptionDish,
                price: data.priceDish,
                photo: photoURL,
                foodType: data.typeDish.replace(',', ' '),
                restaurant: {
                    id: restaurantId,
                },
            };

            await registerDish(newDish);
            toast.success('Prato adicionado com sucesso!');
            mockSetImageBackground('');
            mockNavigate('/admin/menu');
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error('O prato já foi cadastrado!');
            }
        }
    };

    it('deve enviar o formulário com sucesso e navegar para /admin/menu', async () => {
        const mockData = {
            nameDish: 'Pizza',
            descriptionDish: 'Pizza deliciosa',
            priceDish: '20',
            photoDish: [new File([], 'pizza.png')],
            typeDish: 'Italiana',
        };

        (uploadImage as jest.Mock).mockResolvedValue('http://image-url.com');
        (registerDish as jest.Mock).mockResolvedValue({});

        await handleSubmitForm(mockData);

        expect(uploadImage).toHaveBeenCalledWith(mockData.photoDish[0]);
        expect(registerDish).toHaveBeenCalledWith({
            dishName: 'Pizza',
            description: 'Pizza deliciosa',
            price: '20',
            photo: 'http://image-url.com',
            foodType: 'Italiana',
            restaurant: {
                id: 2,
            },
        });
        expect(toast.success).toHaveBeenCalledWith('Prato adicionado com sucesso!');
        expect(mockSetImageBackground).toHaveBeenCalledWith('');
        expect(mockNavigate).toHaveBeenCalledWith('/admin/menu');
    });

    it('deve mostrar um erro se o prato já estiver registrado', async () => {
        const mockData = {
            nameDish: 'Pizza',
            descriptionDish: 'Pizza deliciosa',
            priceDish: '20',
            photoDish: [new File([], 'pizza.png')],
            typeDish: 'Italiana',
        };

        (uploadImage as jest.Mock).mockResolvedValue('http://image-url.com');
        (registerDish as jest.Mock).mockRejectedValue(new AxiosError());

        await handleSubmitForm(mockData);

        expect(uploadImage).toHaveBeenCalledWith(mockData.photoDish[0]);
        expect(registerDish).toHaveBeenCalled();
        expect(toast.error).toHaveBeenCalledWith('O prato já foi cadastrado!');
        expect(mockSetImageBackground).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    });
});
