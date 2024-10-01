import { FaArrowLeftLong } from "react-icons/fa6"
import { Button } from "../../components/common/Button"
import { Dropdown } from "../../components/common/DropDown"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { schema, typeNewDish } from "./schema"
import { useNavigate } from "react-router-dom"
import { Input } from "../../components/common/Input"
import { toast } from "react-toastify"
import { CiImageOn } from "react-icons/ci"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { FoodTypes } from "../../utils/foodTypes"
import { uploadImage } from "../../hooks/useFireStorage"
import { registerDish } from "../../services/registerDish"
import { AxiosError } from "axios"
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
    const [priceValue, setPriceValue] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, trigger, formState: { errors, isSubmitting } } = useForm<typeNewDish>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleDropdownChange = (value: string) => {
        setValue('typeDish', value);
        trigger('typeDish');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageBackground(URL.createObjectURL(file));
        }
    };

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
    };

    const handleSubmitForm = async (data: typeNewDish) => {
        try {
            const restaurantId = 2
            const photoURL = await uploadImage(data.photoDish[0])
            const priceValueFormatted = priceValue.replace('R$ ', '').replace('.', '').replace(',', '.');

            const newDish = {
                dishName: data.nameDish,
                description: data.descriptionDish,
                price: priceValueFormatted,
                photo: photoURL,
                foodType: data.typeDish.replace(/,/g, ' '),
                restaurant: {
                    id: restaurantId
                }
            }

            await registerDish(newDish)
            toast.success('Prato adicionado com sucesso!');
            setImageBackground("");
            navigate('/admin/menu');

        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error('Ocorreu um erro!')
                return
            }
        }
    }


    return (
        <Main>
            <Helmet title="Novo prato" />
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
                            value={''}
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
