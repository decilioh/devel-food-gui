import { useState } from "react";
import { MdFastfood } from "react-icons/md";
import { FormatCurrency } from "../../../utils/formatCurrency.";
import { CardContainer, OrderItens, CardItensExpand, CardContainerExpanded, CardContent, } from "./styles";


export type CardProps = {
    Date: Date,
    Name: string,
    Observation: string,
    Quantity: number,
    Price: number,
}

export const CardOrder = ({ Date, Name, Observation, Quantity, Price }: CardProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    function handleExpandCard() {
        setIsExpanded(!isExpanded)
    }

    return (
        <CardContainer $isExpanded={isExpanded}>
            <CardContent>
                <OrderItens>
                    <p>Data do Pedido: <span>{Date.toLocaleDateString()}</span></p>
                    <p>Valor do prato:<span>{FormatCurrency(Price, 'BRL')}</span></p>
                    <CardItensExpand $isExpanded={isExpanded}>
                        <p>Nome do prato: <span>{Name}</span></p>
                        <p>Observação: <span>{Observation}</span></p>
                        <p>Quantidade:<span>{Quantity}x</span></p>
                    </CardItensExpand>
                </OrderItens>
                <div>
                    <MdFastfood size={40} color={'#FFF'} />
                </div>
            </CardContent>

            <hr />
            <CardContainerExpanded>
                <button type="button" onClick={handleExpandCard}>
                    <span>
                        {isExpanded ? 'Clique para ver menos' : 'Clique para ver mais'}
                    </span>
                </button>
            </CardContainerExpanded>
        </CardContainer>
    )
}
