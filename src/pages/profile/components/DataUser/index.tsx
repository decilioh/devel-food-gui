import { useForm } from "react-hook-form"
import { Input } from "../../../../components/common/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { DataUserSchema, schema } from "./schema"
import { MdOutlineAccessibility, MdOutlineEmail } from "react-icons/md"
import { maskCNPJ, maskPhone } from "../../../../utils/mask"
import { IoMdCard } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa"
import { Dropdown } from "../../../../components/common/DropDown"
import { FormContainer } from "./styles"
import { useEffect } from "react"
import { mockProfile } from "../../../../mocks/UserMock"

export const DataUser = ({ onSubmitRef }: { onSubmitRef: React.MutableRefObject<(() => Promise<void>) | null> }) => {
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<DataUserSchema>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof DataUserSchema, value);
        await trigger('restaurantName');
    };

    const handlePhoneChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const maskedValue = maskPhone(event.target.value);
        setValue('telefone', maskedValue);
        await trigger('telefone')
    };
    const handleDropdownChange = (value: string[]) => {
        setValue('restaurantType', value);
        trigger('restaurantType');
    };

    const onSubmit = async (data: DataUserSchema) => {
        console.log('UserData:', data);
    };

    useEffect(() => {
        onSubmitRef.current = handleSubmit(onSubmit);
    }, [onSubmitRef, handleSubmit]);

    useEffect(() => {
        setValue("email", mockProfile.email);
        setValue("cnpj", maskCNPJ(mockProfile.cnpj));
        setValue("restaurantName", mockProfile.name);
        setValue("telefone", maskPhone(mockProfile.phone));
        setValue("restaurantType", mockProfile.foodTypes);
    }, [setValue]);

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="email"
                type="email"
                placeholder='E-mail'
                register={register}
                error={errors.email?.message}
                icon={<MdOutlineEmail />}
                id="input-email"
                disabled
            />

            <Input
                name="cnpj"
                type="text"
                placeholder='Cnpj'
                register={register}
                error={errors.cnpj?.message}
                icon={<IoMdCard />}
                id="input-cnpj"
                disabled
            />
            <Input
                name="restaurantName"
                type="text"
                placeholder='Nome'
                register={register}
                error={errors.restaurantName?.message}
                icon={<MdOutlineAccessibility />}
                onChange={handleNameChange}
                id="input-name"
            />
            <Input
                name="telefone"
                type="tel"
                placeholder='Telefone'
                register={register}
                error={errors.telefone?.message}
                icon={<FaPhoneAlt />}
                onChange={handlePhoneChange}
                id="input-telephone"
            />
            <Dropdown
                name="restaurantType"
                register={register}
                error={errors.restaurantType?.message}
                options={[
                    { value: 'Brasileira', label: 'Brasileira' },
                    { value: 'Picante', label: 'Picante' },
                    { value: 'Mexicana', label: 'Mexicana' },
                    { value: 'Japonesa', label: 'Japonesa' },
                    { value: 'Tailandesa', label: 'Tailandesa' },
                    { value: 'Chinesa', label: 'Chinesa' },
                    { value: 'Indiana', label: 'Indiana' },
                    { value: 'Italiana', label: 'Italiana' },

                ]}
                onChange={handleDropdownChange}
                value={mockProfile.foodTypes}
            />

        </FormContainer>
    )
}
