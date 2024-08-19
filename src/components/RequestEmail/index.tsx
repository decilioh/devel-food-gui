import { Input } from '../common/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MdOutlineEmail } from 'react-icons/md';
import { RequestEmailData, schema } from './schema';
import { Button } from '../common/Button';
import { LogoDevelFood } from '../common/Logo';
import { FieldsetButton, Form } from './styles';

interface RequestEmailProps {
    onSubmit: (email: string) => void
}

export const RequestEmail = ({ onSubmit }: RequestEmailProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<RequestEmailData>({
        resolver: zodResolver(schema),
    });

    const handleSubmitEmail = (data: RequestEmailData) => {
        onSubmit(data.email);
        console.log(data.email)
    };

    return (
        <Form id="form-recover-password" onSubmit={handleSubmit(handleSubmitEmail)}>
            <LogoDevelFood />
            <fieldset>
                <Input
                    name="email"
                    type='email'
                    placeholder="Email"
                    icon={<MdOutlineEmail />}
                    register={register}
                    error={errors.email?.message}
                    id="input-email"
                />
            </fieldset>
            <FieldsetButton>
                <Button id="button-submit" type="submit">Continuar</Button>
            </FieldsetButton>
        </Form>
    );
};

