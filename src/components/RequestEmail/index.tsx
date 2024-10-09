import { Input } from '../common/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MdOutlineEmail } from 'react-icons/md';
import { RequestEmailData, schema } from './schema';
import { Button } from '../common/Button';
import { LogoDevelFood } from '../common/Logo';
import { FieldsetButton, FieldsetInput, Form } from './styles';
import { useNavigate } from 'react-router-dom';
import { apiRestaurantRegister } from '../../services/backend';
import axios from 'axios';
import { toast } from 'react-toastify';

interface RequestEmailProps {
    onSubmit: (email: string) => void
}

export const RequestEmail = ({ onSubmit }: RequestEmailProps) => {
    const Navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RequestEmailData>({
        resolver: zodResolver(schema),
    });

    const handleSubmitEmail = async (data: RequestEmailData) => {
        try {
            const response = await apiRestaurantRegister.post('/password/send_code', {
                email: data.email,
            });

            console.log(response.data);

            onSubmit(data.email);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.data || error.message);
            } else {
                toast.error('Erro ao enviar o código de validação:');
            }
        }
    };

    return (
        <Form id="form-recover-password" onSubmit={handleSubmit(handleSubmitEmail)}>
            <LogoDevelFood />
            <FieldsetInput>
                <Input
                    name="email"
                    type='email'
                    placeholder="E-mail"
                    icon={<MdOutlineEmail />}
                    register={register}
                    error={errors.email?.message}
                    id="input-email"
                />
            </FieldsetInput>
            <FieldsetButton>
                <Button id="button-submit" type='submit'>{isSubmitting ? 'Enviando...' : 'Enviar'}</Button>
                <Button id="button-return" onClick={() => Navigate('/')}>Voltar</Button>
            </FieldsetButton>
        </Form>
    );
};

