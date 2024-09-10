import { FaArrowLeftLong } from "react-icons/fa6"
import { Button } from "../../components/common/Button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Input } from "../../components/common/Input"
import { toast } from "react-toastify"
import { CiImageOn } from "react-icons/ci"
import { ChangeEvent, useState } from "react"
import { PromotionFormInputs, schema } from "./schema"
import { LuCalendarDays } from "react-icons/lu";
import {
    DivDate,
    File,
    FileContainer,
    Form,
    HeaderContainer,
    Main,
    SectionContainer
} from "./styles"


export const NewPromo = () => {
    const [imageBackground, setImageBackground] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<PromotionFormInputs>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;
        setStartDate(newDate);
        setValue("startDate", newDate);
        if (endDate && newDate > endDate) {
            setEndDate("");
            setValue("endDate", "");
        }
    };

    const handleChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;
        setEndDate(newDate);
        setValue("endDate", newDate);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageBackground(URL.createObjectURL(file));
        }
    };

    const handleSubmitForm = (data: PromotionFormInputs) => {

        if (data) {

            const convertDateFormat = (date: string): string => {
                const [year, month, day] = date.split('-');
                return `${day}/${month}/${year}`
            }

            const convertedStartDate = convertDateFormat(data.startDate);
            const convertedEndDate = convertDateFormat(data.endDate);

            console.log(data);
            console.log(`foto do promoção:${data.photoPromo}`)
            console.log(`Nome do promoção:${data.promotionName}`)
            console.log(`Desconto:${data.percentage} %`)
            console.log(`Data de início:${convertedStartDate}`)
            console.log(`Data final:${convertedEndDate}`)
            toast.success('Promoção adicionada com sucesso!')
            setImageBackground("")
            navigate('/admin/promocoes')
        } else {
            toast.error('Ocorreu algum erro!')
        }
    }


    return (
        <Main>
            <HeaderContainer>
                <div>
                    <Button onClick={() => navigate('/admin/promocoes')}>
                        <FaArrowLeftLong size={51} />
                    </Button>
                </div>
                <div>
                    <h1>Cadastro de novas promoções</h1>
                </div>
            </HeaderContainer>

            <SectionContainer>
                <File>
                    <FileContainer $hasError={errors.photoPromo ? true : false} $backgroundImage={imageBackground}>
                        <CiImageOn size={64} color={'#4f4f4f'} />
                        <span>Adicionar imagem</span>
                        <input
                            type="file"
                            id="input-file"
                            {...register('photoPromo')}
                            accept=".png, .jpg, jpeg"
                            onChange={handleImageChange}
                            max={1}
                        />
                    </FileContainer>
                    {errors.photoPromo && <span>{errors.photoPromo.message}</span>}
                </File>


                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Input
                        type="text"
                        name="promotionName"
                        id="input-name-promotion"
                        register={register}
                        placeholder="Nome da promoção"
                        error={errors.promotionName?.message}
                        maxLength={80}
                    />

                    <Input
                        type="number"
                        name="percentage"
                        id="input-percentage-promo"
                        register={register}
                        placeholder="Percentual %"
                        error={errors.percentage?.message}
                        max="100"
                    />

                    <DivDate>
                        <label htmlFor="input-initial-Date">Data inicial</label>
                        <Input
                            type="date"
                            name="startDate"
                            id="input-initial-Date"
                            register={register}
                            placeholder="Início"
                            error={errors.startDate?.message}
                            icon={<LuCalendarDays />}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={handleChangeStartDate}
                            value={startDate}
                        />
                    </DivDate>
                    <DivDate>
                        <label htmlFor="input-end-Date">Data final</label>
                        <Input
                            type="date"
                            name="endDate"
                            id="input-end-Date"
                            register={register}
                            placeholder="Final"
                            icon={<LuCalendarDays />}
                            error={errors.endDate?.message}
                            value={endDate}
                            min={startDate}
                            onChange={handleChangeEndDate}
                        />
                    </DivDate>

                    <Button type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </SectionContainer>
        </Main>
    )
}
