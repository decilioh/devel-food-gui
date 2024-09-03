import { Button } from "../../components/common/Button"
import { MenuItem } from "./components/MenuItem/MenuItem"
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { ButtonContainer, ButtonSearch, Container, Form, Header, HeaderContent, InputSearch, SectionProductsList, TitleContainer } from "./styles"

export const Menu = () => {
    return (
        <Container>
            <Header id='header-container'>
                <HeaderContent id="Header-Content">
                    <ButtonContainer>
                        <Button id="button-new-plate">Novo prato +</Button>
                    </ButtonContainer>

                    <TitleContainer>
                        <h1 id="title-page">Menu do restaurante</h1>
                    </TitleContainer>

                    <Form id="form-search">
                        <InputSearch
                            type="text"
                            placeholder="Nome do prato"
                            id="input-search"
                        />
                        <ButtonSearch id="button-search">
                            <img src={SearchIcon} alt="Botão pesquisar" />
                        </ButtonSearch>
                    </Form>
                </HeaderContent>
            </Header>

            <SectionProductsList id="section-list-food">
                <MenuItem title="Strogonoff de frango" />
                <MenuItem title="Strogonoff de frango" />
                <MenuItem title="Strogonoff de frango" />
                <MenuItem title="Strogonoff de frango" />
                <MenuItem title="Strogonoff de frango" />
                <MenuItem title="Strogonoff de frango" />
                <MenuItem title="Strogonoff de frango" />
                <MenuItem title="Strogonoff de frango" />
            </SectionProductsList>
        </Container>
    )
}
