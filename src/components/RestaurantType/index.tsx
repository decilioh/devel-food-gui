import step2Light from '../../assets/images/step/light/step-2-light.svg'
import step2Dark from '../../assets/images/step/dark/step-2-dark.svg'
import { Button } from "../common/Button"
import { Input } from "../common/Input"
import { LogoDevelFood } from "../common/Logo"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { StepRegister } from "../common/StepRegister"
import { restaurantTypeData, schema } from "./schema"
import { maskPhone } from "../../utils/mask"
import { FaPhoneAlt } from "react-icons/fa";
import { Dropdown } from '../common/DropDown'
import { MdOutlineAccessibility } from 'react-icons/md'
import { Container, FieldButton, File, FileContainer, Form, InputFieldset, InputsContainer, LogoView } from "./styles"
import { RestaurantTypeDataProps } from '../../context/RegisterRestaurant/interfaces'
import { FoodTypes } from '../../utils/foodTypes'
import { CiImageOn } from 'react-icons/ci'
import { useState } from 'react'
import { uploadImage } from '../../hooks/useFireStorage'
interface RestaurantTypeProps {
    onSubmit: (data: RestaurantTypeDataProps) => void;
    navigate: () => void;
}

export const RestaurantType = ({ onSubmit, navigate }: RestaurantTypeProps) => {
    const [imageBackground, setImageBackground] = useState("");

    const { register, handleSubmit, setValue, trigger, formState: { errors, isSubmitting } } = useForm<restaurantTypeData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handlePhoneChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const maskedValue = maskPhone(event.target.value);
        setValue('telefone', maskedValue);
        await trigger('telefone')
    };

    const handleNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof restaurantTypeData, value);
        await trigger('name');
    };

    const handleDropdownChange = (value: string) => {
        setValue('restaurantType', value);
        trigger('restaurantType');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageBackground(URL.createObjectURL(file));
        }
    };


    const handleSubmitForm = async (data: restaurantTypeData) => {

        if (data) {
            const { name, telefone, restaurantType, photoDish } = data;
            const photoURL = await uploadImage(photoDish[0]);
            onSubmit({ name, telefone, restaurantType, photoURL });
        }

        if (isSubmitting) {
            return null
        }
    }

    return (
        <Container>
            <LogoView>
                <LogoDevelFood />
            </LogoView>
            <Form id="form-restaurant-type" onSubmit={handleSubmit(handleSubmitForm)}>
                <figure>
                    <StepRegister
                        lightSrc={step2Light}
                        darkSrc={step2Dark}
                        alt="Etapa 1"
                    />
                </figure>
                <InputsContainer>
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

                    <InputFieldset>
                        <Input
                            name="name"
                            type="text"
                            placeholder='Nome'
                            register={register}
                            error={errors.name?.message}
                            icon={<MdOutlineAccessibility />}
                            onChange={handleNameChange}
                            id="input-name"
                        />
                    </InputFieldset>
                    <InputFieldset>
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
                    </InputFieldset>
                    <InputFieldset>
                        <Dropdown
                            name="restaurantType"
                            register={register}
                            error={errors.restaurantType?.message}
                            options={FoodTypes}
                            onChange={handleDropdownChange}
                            value={''}
                        />
                    </InputFieldset>
                </InputsContainer>

                <FieldButton>
                    <Button id="button-submit-restaurant-type" disabled={isSubmitting} type="submit">
                        {isSubmitting ? 'Enviando...' : 'Continuar'}
                    </Button>
                    <Button id="button-return-page" onClick={navigate}>
                        Voltar
                    </Button>
                </FieldButton>
            </Form>
        </Container>

    )

}