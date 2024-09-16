import { Reviews } from "./components/Review"
import { Feedback } from "./components/Feedback"
import { Helmet } from "react-helmet-async"
import { Promotions } from "./components/Promotions"
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
            <Helmet title="Home" />
            <SectionReviewsAndPromotions id="ReviewsAndPromotions">

                <ReviewsContainer>
                    <h2 id="review-title">Avaliações</h2>
                    <div id="review-item">
                        <Reviews />
                    </div>
                </ReviewsContainer>

                <hr />

                <PromotionsContainer>
                    <h3 id="promotions-active">Promoções ativas</h3>

                    <PromotionsImages id="promotion-images">
                        <Promotions />
                    </PromotionsImages>
                </PromotionsContainer>

                <DividerBottom id="divider-bottom" />

            </SectionReviewsAndPromotions>

            <Divider id="divider-item" />

            <SectionFeedback>
                <h4>O que os clientes estão <br />achando?</h4>
                <div>
                    <Feedback />
                </div>
            </SectionFeedback>
        </MainContainer>
    )
}
