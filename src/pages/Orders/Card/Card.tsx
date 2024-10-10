import { useState } from "react";
import { useDrag } from "react-dnd";
import { MdFastfood } from "react-icons/md";
import { CardContainer, OrderItens, CardItensExpand, CardContainerExpanded, CardContent } from "./styles";
import { FormatCurrency } from "../../../utils/formatCurrency.";

interface DragItem {
    Date: Date;
    Name: string;
    Addrress: string;
    Quantity: number;
    Price: number;
}

export type CardProps = {
    Date: Date;
    Name: string;
    Addrress: string;
    Quantity: number;
    Price: number;
    id: number;
};

export const ItemType = {
    CARD: "card",
};

export const CardOrder = ({ Date, Name, Addrress, Quantity, Price, id }: CardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [{ isDragging }, drag] = useDrag<DragItem, unknown, { isDragging: boolean }>({
        type: ItemType.CARD,
        item: { Date, Name, Addrress, Quantity, Price },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    function handleExpandCard() {
        setIsExpanded(!isExpanded);
    }

    return (
        <CardContainer id={`${Name}-${id}`} ref={drag} $isExpanded={isExpanded} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <CardContent>
                <OrderItens>
                    <p>Data do Pedido: <span>{Date.toLocaleDateString()}</span></p>
                    <p>Valor do prato: <span>{FormatCurrency(Price, "BRL")}</span></p>
                    <CardItensExpand $isExpanded={isExpanded}>
                        <p>Nome do prato: <span>{Name}</span></p>
                        <p>Quantidade: <span>{Quantity}x</span></p>
                        <p>Endereço: <span>{Addrress}</span></p>
                    </CardItensExpand>
                </OrderItens>
                <div>
                    <MdFastfood size={40} color={"#FFF"} />
                </div>
            </CardContent>

            <hr />
            <CardContainerExpanded>
                <button id="expand-card-button" type="button" onClick={handleExpandCard}>
                    <span>{isExpanded ? "Clique para ver menos" : "Clique para ver mais"}</span>
                </button>
            </CardContainerExpanded>
        </CardContainer>
    );
};