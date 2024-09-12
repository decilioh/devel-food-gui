import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { DataAdress } from "./components/Adress";
import { DataUser } from "./components/DataUser";
import { ButtonSaveContainer, ContainerSections, DataContent, DivisorFinal, Main, SectionAdress, SectionDataUser } from "./styles"
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

export const Profile = () => {
    const navigate = useNavigate();

    const submitUserInfosRef = useRef<(() => Promise<any>) | null>(null);
    const submitAddressRef = useRef<(() => Promise<any>) | null>(null);

    const handleSubmitAll = async () => {
        try {
            if (submitUserInfosRef.current) {
                submitUserInfosRef.current();
            }
            if (submitAddressRef.current) {
                submitAddressRef.current();
            }

            const combinedData = {
                ...submitUserInfosRef.current,
                ...submitAddressRef.current,
            };

            console.log(combinedData)

        } catch (error) {
            console.error('Erro ao submeter os formulários', error);
        }
    };

    return (
        <Main>
            <Helmet title="Perfil" />
            <ContainerSections>
                <SectionDataUser>
                    <h2 id="title-page-user">Informações Pessoais</h2>
                    <DataContent>
                        <DataUser onSubmitRef={submitUserInfosRef} />
                        <Button
                            id="button-id-navigate"
                            type="button"
                            onClick={() => navigate('/admin/perfil/trocar-senha')}
                        >
                            Alterar senha
                        </Button>
                    </DataContent>
                </SectionDataUser>
                <hr />

                <SectionAdress>
                    <h3 id="title-page-adress">Endereço</h3>
                    <DataAdress onSubmitRef={submitAddressRef} />
                    <Button type="button" id="button-submit-all-min-resolution" onClick={handleSubmitAll}>
                        Salvar
                    </Button>
                </SectionAdress>
            </ContainerSections>

            <DivisorFinal />

            <ButtonSaveContainer>
                <Button type="button" id="button-submit-all-full-resolution" onClick={handleSubmitAll}>
                    Salvar
                </Button>
            </ButtonSaveContainer>
        </Main>
    )
}
