import { useDrop } from "react-dnd";
import { toast } from "react-toastify";
import { CardOrder, ItemType } from "./Card/Card";
import { OrderContainer, Container, Main, OrdersSections, OrderContent, TitleOrder } from "./styles";
import { useState, useEffect, useContext } from "react";
import { useModal } from "../../hooks/useModal";
import { Helmet } from "react-helmet-async";
import { getAllOrders } from "../../services/getOrders";
import { AuthContext } from "../../context/AuthContext";
import { updateOrderStatus } from "../../services/updateOrderStatus";
import { Modal } from "../../components/common/Modal";
import { IoReload } from "react-icons/io5";

interface OrderItem {
    id: number;
    Name: string;
    Address: string;
    Quantity: number;
    Price: number;
}

interface Product {
    dishName: string;
    quantity: number;
}

interface Customer {
    addresses: { addressLabel: string }[];
}

interface OrderType {
    status: string;
    orderId: number;
    products: Product[];
    customer: Customer;
    totalPrice: number;
}

interface OrdersState {
    waiting: OrderItem[];
    preparing: OrderItem[];
    enRoute: OrderItem[];
    delivered: OrderItem[];
}

export const Orders = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [draggedItem, setDraggedItem] = useState<OrderItem | null>(null);
    const [fetchUpdate, setFetchUpdate] = useState(true)
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState<OrdersState>({
        waiting: [],
        preparing: [],
        enRoute: [],
        delivered: [],
    });

    const stageOrder = ["waiting", "preparing", "enRoute", "delivered"];

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await getAllOrders(user?.id);
            const fetchedOrders: OrdersState = {
                waiting: [],
                preparing: [],
                enRoute: [],
                delivered: [],
            };

            response.forEach((order: OrderType) => {
                switch (order.status) {
                    case "AGUARDANDO_CONFIRMACAO":
                        fetchedOrders.waiting.push({
                            id: order.orderId,
                            Name: order.products[0].dishName,
                            Address: order.customer.addresses[0].addressLabel,
                            Quantity: order.products[0].quantity,
                            Price: order.totalPrice,
                        });
                        break;
                    case "EM_PREPARO":
                        fetchedOrders.preparing.push({
                            id: order.orderId,
                            Name: order.products[0].dishName,
                            Address: order.customer.addresses[0].addressLabel,
                            Quantity: order.products[0].quantity,
                            Price: order.totalPrice,
                        });
                        break;
                    case "SAIU_PARA_ENTREGA":
                        fetchedOrders.enRoute.push({
                            id: order.orderId,
                            Name: order.products[0].dishName,
                            Address: order.customer.addresses[0].addressLabel,
                            Quantity: order.products[0].quantity,
                            Price: order.totalPrice,
                        });
                        break;
                    case "ENTREGUE":
                        fetchedOrders.delivered.push({
                            id: order.orderId,
                            Name: order.products[0].dishName,
                            Address: order.customer.addresses[0].addressLabel,
                            Quantity: order.products[0].quantity,
                            Price: order.totalPrice,
                        });
                        break;
                    default:
                        break;
                }
            });

            setOrders(fetchedOrders);
            setFetchUpdate(false)
        };

        fetchOrders();
    }, [fetchUpdate]);

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

    const statusSequence = [
        "AGUARDANDO_CONFIRMACAO",
        "EM_PREPARO",
        "SAIU_PARA_ENTREGA",
        "ENTREGUE"
    ];

    const handleSearch = () => {
        setFetchUpdate(true)
    }

    const confirmMove = async () => {
        if (draggedItem) {
            const currentStage = Object.keys(orders).find((key) =>
                orders[key as keyof OrdersState].some((order) => order.Name === draggedItem.Name)
            ) as keyof OrdersState;

            const orderToUpdate = orders[currentStage].find(order => order.Name === draggedItem.Name);

            if (orderToUpdate) {
                const statusMap = {
                    "AGUARDANDO_CONFIRMACAO": "EM_PREPARO",
                    "EM_PREPARO": "SAIU_PARA_ENTREGA",
                    "SAIU_PARA_ENTREGA": "ENTREGUE"
                };

                const currentStatus = statusSequence[stageOrder.indexOf(currentStage)] as keyof typeof statusMap;
                const nextStatus = statusMap[currentStatus];

                if (nextStatus) {
                    setOrders((prevOrders) => {
                        const newOrders = { ...prevOrders };

                        Object.keys(newOrders).forEach((key) => {
                            newOrders[key as keyof OrdersState] = newOrders[key as keyof OrdersState].filter(
                                (order) => order.Name !== draggedItem.Name
                            );
                        });

                        const stageKey = stageOrder[stageOrder.indexOf(currentStage) + 1] as keyof typeof newOrders;
                        newOrders[stageKey].push(draggedItem);

                        return newOrders;
                    });

                    await updateOrderStatus(orderToUpdate.id, nextStatus);
                    setFetchUpdate(true)
                } else {
                    toast.info("O pedido já está na última etapa!");
                }
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
                <h1>Seus pedidos</h1>
                <IoReload size={40} onClick={handleSearch} />
                <OrdersSections>
                    <OrderContainer id="waiting-container" ref={waitingDrop}>
                        <TitleOrder id="waiting-title">Esperando aceitação</TitleOrder>
                        <OrderContent>
                            {orders.waiting.map((order) => (
                                <CardOrder
                                    key={order.id}
                                    id={order.id}
                                    Date={new Date()}
                                    Name={order.Name}
                                    Addrress={order.Address}
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
                                    Addrress={order.Address}
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
                                    Addrress={order.Address}
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
                                    Addrress={order.Address}
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
