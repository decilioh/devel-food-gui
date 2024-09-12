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
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<typeNewDish>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleDropdownChange = (value: string[]) => {
        setValue('typeDish', value);
        trigger('typeDish');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageBackground(URL.createObjectURL(file));
        }
    };

    const handleSubmitForm = (data: typeNewDish) => {

        if (data) {
            console.log(data);
            console.log(`foto do prato:${data.photoDish}`)
            console.log(`Nome do prato:${data.nameDish}`)
            console.log(`Descrição:${data.descriptionDish}`)
            console.log(`Tipo de comida:${data.typeDish}`)
            console.log(`Preço:${data.priceDish}`)
            toast.success('Prato adicionado com sucesso!')
            setImageBackground("")
            navigate('/admin/menu')
        } else {
            toast.error('Ocorreu algum erro!')
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
                    <FileContainer $hasError={errors.photoDish ? true : false} $backgroundImage={imageBackground}>
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
                            $hasError={errors.descriptionDish ? true : false}
                            {...register('descriptionDish')}
                        />
                        {errors.photoDish && <span>{errors.descriptionDish?.message}</span>}

                        <Input
                            type="text"
                            name="priceDish"
                            id="input-price-dish"
                            register={register}
                            placeholder="Preço"
                            error={errors.priceDish?.message}
                        />


                    </DescriptionAndPrice>

                    <div>
                        <Dropdown
                            name="typeDish"
                            register={register}
                            error={errors.typeDish?.message}
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
                            value={[]}
                        />
                    </div>
                    <Button type="submit">
                        Salvar
                    </Button>
                </Form>
            </SectionContainer>
        </Main>
    )
}
