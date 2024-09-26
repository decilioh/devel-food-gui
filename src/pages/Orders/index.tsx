import { useDrop } from "react-dnd";
import { toast } from "react-toastify";
import { CardOrder, ItemType } from "./Card/Card";
import { OrderContainer, Container, Main, OrdersSections, OrderContent, TitleOrder } from "./styles";
import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/common/Modal";
import { Helmet } from "react-helmet-async";

interface OrderItem {
    Name: string;
    Observation: string;
    Quantity: number;
    Price: number;
    id: number;
}

interface OrdersState {
    waiting: OrderItem[];
    preparing: OrderItem[];
    enRoute: OrderItem[];
    delivered: OrderItem[];
}

const mockOrders: OrdersState = {
    waiting: [
        { id: 1, Name: 'Pizza Margherita', Observation: 'Sem massa', Quantity: 1, Price: 39.90 },
        { id: 2, Name: 'Hambúrguer Artesanal', Observation: 'Ponto médio', Quantity: 2, Price: 29.90 },
        { id: 3, Name: 'Salada Caesar', Observation: 'Molho à parte', Quantity: 1, Price: 24.90 },
        { id: 4, Name: 'Sushi Combo', Observation: 'Sem wasabi', Quantity: 1, Price: 64.90 },
    ],
    preparing: [
        { id: 5, Name: 'Feijoada Completa', Observation: 'Sem linguiça e feijão normal', Quantity: 2, Price: 49.90 },
        { id: 6, Name: 'Risoto de Cogumelos', Observation: 'Extra de parmesão e sem cogumelos', Quantity: 1, Price: 44.90 },
    ],
    enRoute: [
        { id: 7, Name: 'Frango à Parmegiana', Observation: 'Molho extra', Quantity: 1, Price: 34.90 },
    ],
    delivered: [
        { id: 8, Name: 'Lasanha Bolonhesa', Observation: 'Sem queijo e bolonhesa', Quantity: 1, Price: 39.90 },
        { id: 9, Name: 'Torta de Limão', Observation: '', Quantity: 2, Price: 19.90 },
    ],
}


export const Orders = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [draggedItem, setDraggedItem] = useState<OrderItem | null>(null);
    const [orders, setOrders] = useState<OrdersState>(mockOrders);

    const stageOrder = ["waiting", "preparing", "enRoute", "delivered"];

    const isGoingBack = (currentStage: keyof OrdersState, targetStage: keyof OrdersState) => {
        return stageOrder.indexOf(currentStage) > stageOrder.indexOf(targetStage);
    };

    const handleDrop = (item: OrderItem, target: keyof OrdersState) => {
        const currentStage = Object.keys(orders).find((key) =>
            orders[key as keyof OrdersState].some((order) => order.Name === item.Name)
        ) as keyof OrdersState;

        if (isGoingBack(currentStage, target)) {
            toast.error("Não é possível mover para uma etapa anterior!");
            return;
        }

        setDraggedItem(item);
        openModal();
    };

    const confirmMove = () => {
        if (draggedItem) {
            const currentStage = Object.keys(orders).find((key) =>
                orders[key as keyof OrdersState].some((order) => order.Name === draggedItem.Name)
            ) as keyof OrdersState;

            const currentIndex = stageOrder.indexOf(currentStage);
            const nextStage = stageOrder[currentIndex + 1] as keyof OrdersState;

            if (nextStage) {
                setOrders((prevOrders) => {
                    const newOrders = { ...prevOrders };

                    Object.keys(newOrders).forEach((key) => {
                        newOrders[key as keyof OrdersState] = newOrders[key as keyof OrdersState].filter(
                            (order) => order.Name !== draggedItem.Name
                        );
                    });

                    newOrders[nextStage].push(draggedItem);

                    return newOrders;
                });
            } else {
                toast.info("O pedido já está na última etapa!");
            }

            closeModal();
            setDraggedItem(null);
        }
    };

    const createDrop = (target: keyof OrdersState) =>
        useDrop({
            accept: ItemType.CARD,
            drop: (item: OrderItem) => handleDrop(item, target),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
        });

    const [, waitingDrop] = createDrop('waiting');
    const [, preparingDrop] = createDrop('preparing');
    const [, enRouteDrop] = createDrop('enRoute');
    const [, deliveredDrop] = createDrop('delivered');

    return (
        <Container>
            <Helmet title="Pedidos" />
            <Main>
                <h1>Seus Pedidos</h1>

                <OrdersSections>
                    <OrderContainer id="waiting-container" ref={waitingDrop}>
                        <TitleOrder id="waiting-title">Esperando aceitação</TitleOrder>
                        <OrderContent>
                            {orders.waiting.map((order, index) => (
                                <CardOrder
                                    key={index}
                                    id={order.id}
                                    Date={new Date()}
                                    Name={order.Name}
                                    Observation={order.Observation}
                                    Quantity={order.Quantity}
                                    Price={order.Price}
                                />
                            ))}
                        </OrderContent>
                    </OrderContainer>

                    <OrderContainer id="preparing-container" ref={preparingDrop}>
                        <TitleOrder id="preparing-title">Em preparo</TitleOrder>
                        <OrderContent>
                            {orders.preparing.map((order) => (
                                <CardOrder
                                    key={order.id}
                                    id={order.id}
                                    Date={new Date()}
                                    Name={order.Name}
                                    Observation={order.Observation}
                                    Quantity={order.Quantity}
                                    Price={order.Price}
                                />
                            ))}
                        </OrderContent>
                    </OrderContainer>

                    <OrderContainer id="enRoute-container" ref={enRouteDrop}>
                        <TitleOrder id="enRoute-title">Em rota</TitleOrder>
                        <OrderContent>
                            {orders.enRoute.map((order) => (
                                <CardOrder
                                    key={order.id}
                                    id={order.id}
                                    Date={new Date()}
                                    Name={order.Name}
                                    Observation={order.Observation}
                                    Quantity={order.Quantity}
                                    Price={order.Price}
                                />
                            ))}
                        </OrderContent>
                    </OrderContainer>

                    <OrderContainer id="delivered-container" ref={deliveredDrop}>
                        <TitleOrder id="delivered-title">Entregue</TitleOrder>
                        <OrderContent $isLast={true}>
                            {orders.delivered.map((order) => (
                                <CardOrder
                                    key={order.id}
                                    id={order.id}
                                    Date={new Date()}
                                    Name={order.Name}
                                    Observation={order.Observation}
                                    Quantity={order.Quantity}
                                    Price={order.Price}
                                />
                            ))}
                        </OrderContent>
                    </OrderContainer>
                </OrdersSections>
            </Main>

            <Modal
                $isOpen={isOpen}
                $onClose={closeModal}
                $onConfirm={confirmMove}
                $description="Você tem certeza que deseja realizar esta ação?"
            />
        </Container>
    );
};
