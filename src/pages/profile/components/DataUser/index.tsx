import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCard } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

import { Input } from "../../../../components/common/Input";
import { Dropdown } from "../../../../components/common/DropDown";
import { File, FileContainer, FormContainer } from "./styles";
import { maskCNPJ, maskPhone } from "../../../../utils/mask";
import { FoodTypes } from "../../../../utils/foodTypes";
import { AuthContext } from "../../../../context/AuthContext";
import { getUserData } from "../../../../services/getDataUser";
import { updateUserData } from "../../../../services/updatedUserData";
import { uploadImage } from "../../../../hooks/useFireStorage";
import { DataUserSchema, schema } from "./schema";
import { Loader } from "../../../../components/common/Loader";
export const DataUser = ({ onSubmitRef, onImageUpload }: { onSubmitRef: React.MutableRefObject<(() => Promise<void>) | null>, onImageUpload: (imageUrl: string) => void }) => {
    const [imageBackground, setImageBackground] = useState("");
    const [restaurantFood, setRestaurantFood] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [loading, setLoading] = useState(true);
    const [isUploading, setIsUploading] = useState(false);
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<DataUserSchema>({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageBackground(URL.createObjectURL(file));
            try {
                setIsUploading(true)
                const imageUpload = await uploadImage(file);
                setImageLink(imageUpload);
                onImageUpload(imageUpload);
                setIsUploading(false)
            } catch (error) {
                setLoading(false)
            }
        }
    };

    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const restaurantId = user?.id;
                const response = await getUserData(restaurantId);

                setValue('cnpj', maskCNPJ(response.cnpj));
                setValue('email', response.email);
                setValue('telefone', maskPhone(response.phoneNumber));
                setValue('restaurantName', response.name);
                setValue('restaurantType', response.foodType);
                setRestaurantFood(response.foodType);
                setImageBackground(response.photo);
                onImageUpload(response.photo);
                setLoading(false);
            } catch (error) {
                toast.error('Falha ao buscar os dados');
                setLoading(false);
            }
        };

        fetchDataUser();
    }, [user?.id, setValue]);

    const handleNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValue(name as keyof DataUserSchema, value);
        await trigger('restaurantName');
    };

    const handlePhoneChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const maskedValue = maskPhone(event.target.value);
        setValue('telefone', maskedValue);
        await trigger('telefone');
    };

    const handleDropdownChange = (value: string) => {
        setValue('restaurantType', value);
        trigger('restaurantType');
    };

    const onSubmit = async (data: DataUserSchema) => {
        const userData = {
            email: data.email,
            name: data.restaurantName,
            phoneNumber: data.telefone.replace(/\D/g, ''),
            foodType: data.restaurantType,
            photo: imageLink,
            id: user?.id
        };

        const updatedUserData = {
            ...userData,
            email: userData.email ?? '',
        };

        updateUserData(updatedUserData);
    };

    useEffect(() => {
        onSubmitRef.current = handleSubmit(onSubmit);
    }, [onSubmitRef, handleSubmit]);

    if (loading) {
        return <Loader />;
    }



    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <File>
                <FileContainer htmlFor="input-file" $hasError={!!errors.photoUser} $backgroundImage={isUploading ? 'carregando...' : imageBackground}>
                    <CiImageOn size={64} color={'#4f4f4f'} />
                    <span>Adicionar imagem</span>
                    <input
                        type="file"
                        id="input-file"
                        {...register('photoUser')}
                        accept=".png, .jpg, jpeg"
                        onChange={handleImageChange}
                        max={1}
                    />
                </FileContainer>
                {errors.photoUser && <span>{errors.photoUser.message}</span>}
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
                value={restaurantFood}
            />
        </FormContainer>
    );
};
