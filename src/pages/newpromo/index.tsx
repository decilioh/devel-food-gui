import { FaArrowLeftLong } from "react-icons/fa6"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { CiImageOn } from "react-icons/ci"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { PromotionFormInputs, schema } from "./schema"
import { LuCalendarDays } from "react-icons/lu";
import { Helmet } from "react-helmet-async"
import {
    DivDate,
    File,
    FileContainer,
    Form,
    HeaderContainer,
    Main,
    SectionContainer
} from "./styles"
import { AuthContext } from "../../context/AuthContext"
import { newPromo } from "../../services/registerPromo"
import { uploadImage } from "../../hooks/useFireStorage"
import { AxiosError } from "axios"
import { getPromoById } from "../../services/getPromoById"
import { updatePromo } from "../../services/updatedPromo"
import { convertDateFormat } from "../../utils/convertData"
import { Button } from "../../components/common/Button"
import { Input } from "../../components/common/Input"


export const NewPromo = () => {
    const [imageBackground, setImageBackground] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const { pathname } = useLocation()
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const { id } = useParams<{ id: string }>();
    const { register, handleSubmit, setValue, setError, formState: { errors, isSubmitting } } = useForm<PromotionFormInputs>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    useEffect(() => {
        if (id) {
            setIsUpdating(true);
            loadPromoData(id);
        }
    }, [id]);

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
            setImageFile(file)
        }
    };



    const loadPromoData = async (promoId: string) => {
        try {
            const allPromos = await getPromoById();
            const promo = allPromos.find((promo: { idPromotion: number }) => promo.idPromotion === parseInt(promoId));
            if (promo) {
                setValue('promotionName', promo.name);
                setValue('percentage', promo.discountPercentage.toString());

                const [dayStart, monthStart, yearStart] = promo.startDate.split('/');
                const formattedStartDate = `${yearStart}-${monthStart}-${dayStart}`;
                const [dayEnd, monthEnd, yearEnd] = promo.endDate.split('/');
                const formattedEndDate = `${yearEnd}-${monthEnd}-${dayEnd}`;

                setValue('startDate', formattedStartDate);
                setValue('endDate', formattedEndDate);

                setImageBackground(promo.imageUrl);
            } else {
                toast.error('Promoção não encontrada.');
            }
        } catch (error) {
            toast.error('Erro ao carregar a promoção.');
        }
    };



    const handleSubmitForm = async (data: PromotionFormInputs) => {
        try {
            let photoURL = imageBackground;

            if (!imageFile && !imageBackground) {
                setError("photoPromo", {
                    type: "manual",
                    message: "Insira uma imagem para continuar",
                });
                return;
            }

            if (imageFile) {
                photoURL = await uploadImage(imageFile);
            }


            const convertedStartDate = convertDateFormat(data.startDate);
            const convertedEndDate = convertDateFormat(data.endDate);

            const restaurantId = user?.id;

            const promoPayload = {
                name: data.promotionName,
                discountPercentage: data.percentage,
                imageUrl: photoURL,
                startDate: convertedStartDate,
                endDate: convertedEndDate,
                id: id,
            };

            if (isUpdating && id) {
                await updatePromo({ ...promoPayload, id: parseInt(id) });
                toast.success('Prato atualizado com sucesso!');
            } else {
                await newPromo({ ...promoPayload, id: restaurantId });
                toast.success('Promoção adicionada com sucesso!');
            }

            setImageBackground("");
            navigate('/admin/promocoes');
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error('Ocorreu um erro!');
                return;
            }
        }
    }


    return (
        <Main>
            <Helmet title={id ? "Edição promoção" : "Nova promoção"} />
            <HeaderContainer>
                <div>
                    <Button onClick={() => navigate('/admin/promocoes')} id="button-return">
                        <FaArrowLeftLong size={51} />
                    </Button>
                </div>
                <div>
                    <h1 id="title-page">Cadastro de novas promoções</h1>
                </div>
            </HeaderContainer>

            <SectionContainer>
                <File>
                    <FileContainer
                        htmlFor="input-file"
                        $hasError={!!errors.photoPromo}
                        $backgroundImage={imageBackground}
                    >
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

                    <Button type="submit" id="button-submit">
                        {
                            pathname === `/admin/promocoes/editar/${id}` ?
                                (isSubmitting ? 'Enviando...' : 'Salvar')
                                :
                                (isSubmitting ? 'Enviando...' : 'Cadastrar')
                        }
                    </Button>
                </Form>
            </SectionContainer>
        </Main>
    )
}
