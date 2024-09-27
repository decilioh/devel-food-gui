import { useForm } from "react-hook-form"
import { Input } from "../../../../components/common/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { DataUserSchema, schema } from "./schema"
import { MdOutlineEmail } from "react-icons/md"
import { maskCNPJ, maskPhone } from "../../../../utils/mask"
import { IoMdCard } from "react-icons/io"
import { Dropdown } from "../../../../components/common/DropDown"
import { File, FileContainer, FormContainer } from "./styles"
import { useEffect, useState } from "react"
import { mockProfile } from "../../../../mocks/UserMock"
import { FoodTypes } from "../../../../utils/foodTypes"
import { CiImageOn } from "react-icons/ci"

export const DataUser = ({ onSubmitRef }: { onSubmitRef: React.MutableRefObject<(() => Promise<void>) | null> }) => {
    const [imageBackground, setImageBackground] = useState("");

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
    const handleDropdownChange = (value: string) => {
        setValue('restaurantType', value);
        trigger('restaurantType');
    };

    const onSubmit = async (data: DataUserSchema) => {
        console.log('UserData:', data);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageBackground(URL.createObjectURL(file));
        }
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
            <File>
                <FileContainer htmlFor="input-file" $hasError={errors.photoDish ? true : false} $backgroundImage={imageBackground}>
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
                icon={<IoMdCard />}
                onChange={handleNameChange}
                id="input-name"
            />
            <Input
                name="telefone"
                type="tel"
                placeholder='Telefone'
                register={register}
                error={errors.telefone?.message}
                icon={<IoMdCard />}
                onChange={handlePhoneChange}
                id="input-telephone"
            />
            <Dropdown
                name="restaurantType"
                register={register}
                error={errors.restaurantType?.message}
                options={FoodTypes}
                onChange={handleDropdownChange}
                value={mockProfile.foodTypes}
            />

        </FormContainer>
    )
}
