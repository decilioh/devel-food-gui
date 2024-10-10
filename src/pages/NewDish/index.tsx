import { FaArrowLeftLong } from "react-icons/fa6"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { schema, typeNewDish } from "./schema"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { CiImageOn } from "react-icons/ci"
import { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { FoodTypes } from "../../utils/foodTypes"
import { uploadImage } from "../../hooks/useFireStorage"
import { registerDish } from "../../services/registerDish"
import { AxiosError } from "axios"
import { AuthContext } from "../../context/AuthContext"
import { getDishById } from "../../services/getDishById"
import { updateDish } from "../../services/updatedDish"
import { Dropdown } from "../../components/common/DropDown"
import { Input } from "../../components/common/Input"
import { Button } from "../../components/common/Button"
import {
    DescriptionAndPrice,
    DescriptionDish,
    File,
    FileContainer,
    Form,
    HeaderContainer,
    Main,
    NameDish,
    SectionContainer
} from "./styles"


export const NewDish = () => {
    const [imageBackground, setImageBackground] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [priceValue, setPriceValue] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [initialDishType, setInitialDishType] = useState<string>('')
    const { user } = useContext(AuthContext)
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, trigger, setError, formState: { errors, isSubmitting } } = useForm<typeNewDish>({
        resolver: zodResolver(schema),
        mode: "onChange",
    })

    useEffect(() => {
        if (id) {
            setIsUpdating(true);
            loadDishData(id);
        }
    }, [id]);



    const handleDropdownChange = (value: string) => {
        setValue('typeDish', value);
        trigger('typeDish');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageBackground(URL.createObjectURL(file));
            setImageFile(file);
        }
    }


    const formatPrice = (value: string) => {
        const numberString = value.replace(/\D/g, '');

        if (!numberString) return '';

        const number = parseFloat(numberString) / 100;

        if (number > 1000) return '1000,00'
        return `${number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedValue = formatPrice(value);
        setPriceValue(formattedValue);
        setValue('priceDish', value, { shouldValidate: true });
        setValue('priceDish', formattedValue, { shouldValidate: true });

    };

    const loadDishData = async (dishId: string) => {
        try {
            const dish = await getDishById(parseInt(dishId));

            setValue('nameDish', dish.dishName);
            setValue('descriptionDish', dish.description);


            const formattedPrice = parseFloat(dish.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            setPriceValue(formattedPrice);
            setValue('priceDish', formattedPrice);

            setInitialDishType(dish.foodType);
            setValue('typeDish', dish.foodType);
            console.log(initialDishType)

            setImageBackground(dish.photo);
        } catch (error) {
            toast.error('Erro ao carregar o prato.');
        }
    };

    const handleSubmitForm = async (data: typeNewDish) => {
        try {
            let photoURL = imageBackground;

            if (!imageFile && !imageBackground) {
                setError("photoDish", {
                    type: "manual",
                    message: "Insira uma imagem para continuar",
                });
                return;
            }

            if (imageFile) {
                photoURL = await uploadImage(imageFile);
            }

            const priceValueFormatted = priceValue.replace('R$ ', '').replace('.', '').replace(',', '.');
            const restaurantId = user?.id;

            const dishPayload = {
                dishName: data.nameDish,
                description: data.descriptionDish,
                price: priceValueFormatted,
                photo: photoURL,
                foodType: data.typeDish.split(',').join(' '),
                restaurant: {
                    id: restaurantId
                }
            };

            if (isUpdating && id) {
                await updateDish({ ...dishPayload, id: parseInt(id) });
                toast.success('Prato atualizado com sucesso!');
            } else {
                await registerDish(dishPayload);
                toast.success('Prato adicionado com sucesso!');
            }

            setImageBackground("");
            navigate('/admin/menu');
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error('Ocorreu um erro!');
                return;
            }
        }
    };


    return (
        <Main>
            <Helmet title={id ? "Edição prato" : "Novo prato"} />
            <HeaderContainer>
                <div>
                    <Button onClick={() => navigate('/admin/menu')}>
                        <FaArrowLeftLong size={51} />
                    </Button>
                </div>
                <div>
                    <h1>Cadastro de novos pratos</h1>
                </div>
            </HeaderContainer>

            <SectionContainer>
                <File>
                    <FileContainer htmlFor="input-file" $hasError={!!errors.photoDish} $backgroundImage={imageBackground}>
                        <CiImageOn size={64} color={'#4f4f4f'} />
                        <span>Adicionar imagem</span>
                        <input
                            type="file"
                            id="input-file"
                            {...register('photoDish')}
                            accept=".png, .jpg, jpeg"
                            onChange={handleImageChange}
                            max={1}
                        />
                    </FileContainer>
                    {errors.photoDish && <span>{errors.photoDish.message}</span>}
                </File>


                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <NameDish>
                        <Input
                            type="text"
                            name="nameDish"
                            id="input-name-dish"
                            register={register}
                            placeholder="Nome"
                            error={errors.nameDish?.message}
                            maxLength={80}
                        />
                    </NameDish>

                    <DescriptionAndPrice>
                        <DescriptionDish
                            id="description-dish"
                            placeholder="Descrição"
                            $hasError={!!errors.descriptionDish}
                            {...register('descriptionDish')}
                        />
                        {errors.photoDish && <span>{errors.descriptionDish?.message}</span>}

                        <Input
                            type="text"
                            name="priceDish"
                            id="input-price-dish"
                            register={register}
                            placeholder="Preço"
                            onChange={handlePriceChange}
                            value={priceValue}
                            error={errors.priceDish?.message}
                        />


                    </DescriptionAndPrice>

                    <div>
                        <Dropdown
                            name="typeDish"
                            register={register}
                            error={errors.typeDish?.message}
                            options={FoodTypes}
                            onChange={handleDropdownChange}
                            value={initialDishType}
                        />
                    </div>
                    <Button disabled={isSubmitting} type="submit">
                        {isSubmitting ? 'Enviando...' : 'Salvar'}
                    </Button>
                </Form>
            </SectionContainer>
        </Main>
    )
}
