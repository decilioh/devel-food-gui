import 'styled-components';
declare module "styled-components" {
    export interface DefaultTheme {
        title: string,

        colors: {
            backgroundColor: string;
            primary: string;
            secondary: string;
            textColor: string;
            greenColor: string;
            redColor: string;
            blackColor: string;
            whiteColor: string;
            sucessInput: string;
            darkGray: string;
            backgroundCard: string;
            textCardColor: string;
            borderCard: string;
            textExpandCard: string;
            colorInputBorder: string;
            backgroundLogin: string
            verifyCodeColor: string;
            verifyCodeSpanColor: string;
            textColorModal: string;
            textColorSideBar: string;
            textColorSideBarHover: string;
            inputTextColor: string;
            borderSearchButton: string;
            backgroundFile: string;
            buttonDisabled: string;
            borderOrder: string;
            TitleOrder: string;
        }
    }
}