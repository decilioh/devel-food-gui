import { CardOrder } from "./Card/Card"
import { OrderContainer, Container, Main, OrdersSections, OrderContent, TitleOrder } from "./styles"

export const Orders = () => {
    return (
        <Container>
            <Main>
                <h1>
                    Seus Pedidos
                </h1>

                <OrdersSections>
                    <OrderContainer>
                        <TitleOrder>Esperando aceitação</TitleOrder>
                        <OrderContent>
                            <CardOrder
                                Date={new Date()}
                                Name="Pizza"
                                Observation="Sem cebola"
                                Quantity={2}
                                Price={54.90}
                            />
                            <CardOrder
                                Date={new Date()}
                                Name="Omelete"
                                Observation="Sem ovo"
                                Quantity={1}
                                Price={54.90}
                            />
                            <CardOrder
                                Date={new Date()}
                                Name="Omelete"
                                Observation="Sem ovo"
                                Quantity={1}
                                Price={54.90}
                            />

                        </OrderContent>
                    </OrderContainer>

                    <OrderContainer>
                        <TitleOrder>Em preparo</TitleOrder>
                        <OrderContent>
                            <CardOrder
                                Date={new Date()}
                                Name="Bife vegano"
                                Observation=""
                                Quantity={1}
                                Price={240.90}
                            />
                        </OrderContent>
                    </OrderContainer>

                    <OrderContainer>
                        <TitleOrder>Em rota</TitleOrder>
                        <OrderContent>
                            <CardOrder
                                Date={new Date()}
                                Name="Pizza calabresa"
                                Observation=""
                                Quantity={1}
                                Price={20.90}
                            />
                        </OrderContent>
                    </OrderContainer>

                    <OrderContainer>
                        <TitleOrder>Entregue</TitleOrder>
                        <OrderContent $isLast={true}>
                            <CardOrder
                                Date={new Date()}
                                Name="Big Mac com molho especial"
                                Observation="Sem hamburguer"
                                Quantity={1}
                                Price={24.90}
                            />
                            <CardOrder
                                Date={new Date()}
                                Name="Donuts"
                                Observation="sem açúcar"
                                Quantity={1}
                                Price={14.90}
                            />
                            <CardOrder
                                Date={new Date()}
                                Name="Cachorro quente"
                                Observation="Sem salsicha"
                                Quantity={1}
                                Price={11.90}
                            />
                        </OrderContent>
                    </OrderContainer>
                </OrdersSections>
            </Main>
        </Container>
    )
}
