import { Reviews } from "./components/Review"
import promotionsIMG from '../../assets/images/promotions.svg'
import { Feedback } from "./components/Feedback"
import {
    Divider,
    DividerBottom,
    MainContainer,
    PromotionsContainer,
    PromotionsImages,
    ReviewsContainer,
    SectionFeedback,
    SectionReviewsAndPromotions
} from "./styles"


export const Home = () => {


    return (
        <MainContainer id="home-container">
            <SectionReviewsAndPromotions id="ReviewsAndPromotions">

                <ReviewsContainer>
                    <h2 id="review-title">Avaliações</h2>
                    <div id="review-item">
                        <Reviews />
                    </div>
                </ReviewsContainer>

                <hr />

                <PromotionsContainer>
                    <h3 id="promotions-active">Promoções Ativas</h3>

                    <PromotionsImages id="promotion-images">
                        <figure>
                            <img src={promotionsIMG} alt="" />
                        </figure>
                        <figure>
                            <img src={promotionsIMG} alt="" />
                        </figure>
                    </PromotionsImages>
                </PromotionsContainer>

                <DividerBottom id="divider-bottom" />

            </SectionReviewsAndPromotions>

            <Divider id="divider-item" />

            <SectionFeedback>
                <h4>O que os clientes estão <br />achando?</h4>
                <div>
                    <Feedback
                        date="01/01/2022"
                        message="“A comida desse lugar é sensacional. Eu e minha esposa comemos quase todo o domingo!!!”"
                        ratingValue={5}
                    />
                    <Feedback
                        date="01/01/2022"
                        message="“A comida desse lugar é sensacional. Eu e minha esposa comemos quase todo o domingo!!!”"
                        ratingValue={5}
                    />
                    <Feedback
                        date="01/01/2022"
                        message="“A comida desse lugar é sensacional. Eu e minha esposa comemos quase todo o domingo!!!”"
                        ratingValue={5}
                    />
                </div>
            </SectionFeedback>
        </MainContainer>
    )
}
