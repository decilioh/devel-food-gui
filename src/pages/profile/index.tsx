import { useNavigate } from "react-router-dom";
import { DataAdress } from "./components/Adress";
import { DataUser } from "./components/DataUser";
import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ButtonSaveContainer, ContainerSections, DataContent, DivisorFinal, Main, SectionAdress, SectionDataUser } from "./styles"
import { updateUserData } from "../../services/updatedUserData";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Button } from "../../components/common/Button";

export const Profile = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [imageLink, setImageLink] = useState("");

    const submitUserInfosRef = useRef<(() => Promise<any>) | null>(null);
    const submitAddressRef = useRef<(() => Promise<any>) | null>(null);

    const handleImageUpload = (imageUrl: string) => {
        setImageLink(imageUrl);
    };


    const handleSubmitAll = async () => {
        try {
            if (submitUserInfosRef.current) {
                await submitUserInfosRef.current();
                updateUserData({ photo: imageLink, id: user?.id })

            }
            if (submitAddressRef.current) {
                await submitAddressRef.current();
            }
            toast.success('Dados atualizados com sucesso!')

        } catch (error) {
            toast.error('Ocorreu um erro!');
        }
    };

    return (
        <Main>
            <Helmet title="Perfil" />
            <ContainerSections>
                <SectionDataUser>
                    <h2 id="title-page-user">Informações Pessoais</h2>
                    <DataContent>
                        <DataUser onSubmitRef={submitUserInfosRef} onImageUpload={handleImageUpload} />
                    </DataContent>
                </SectionDataUser>
                <hr />

                <SectionAdress>
                    <h3 id="title-page-adress">Endereço</h3>
                    <DataAdress onSubmitRef={submitAddressRef} />
                    <Button type="button" id="button-submit-all-min-resolution" onClick={handleSubmitAll}>
                        Salvar
                    </Button>
                    <Button
                        id="button-id-navigate"
                        type="button"
                        onClick={() => navigate('/admin/perfil/trocar-senha')}
                    >
                        Alterar senha
                    </Button>
                </SectionAdress>
            </ContainerSections>

            <DivisorFinal />

            <ButtonSaveContainer>
                <Button type="button" id="button-submit-all-full-resolution" onClick={handleSubmitAll}>
                    Salvar
                </Button>
                <Button
                    id="button-id-navigate"
                    type="button"
                    onClick={() => navigate('/admin/perfil/trocar-senha')}

                >
                    Alterar senha
                </Button>
            </ButtonSaveContainer>
        </Main>
    )
}
