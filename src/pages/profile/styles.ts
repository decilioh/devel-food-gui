import styled from "styled-components";

export const Main = styled.main`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-top:4rem;
    margin-left:2.5rem;
    padding:1rem;

    h3, h2{
        text-align:center;
        font-size: 3rem;
        font-weight: 500;
        line-height: 56.25px;
        text-align: center;
    }
    

    @media(max-height:1443px){
        margin-left:0;
    }    

    @media(max-height:1000px){
        margin-top:1rem;
    }    
    
`

export const ContainerSections = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    gap:117px;
    margin-left:2.5rem;
    hr{
        height:587px;
    }

    @media(max-height:1443px){
        margin-left:0;
    }  

    @media(max-width:1145px){
        flex-direction:column;
        align-items:center;
        gap:10px;
        height:900px;
        overflow-y:auto;

        hr{
            display:none;
        }
    }
`

export const SectionAdress = styled.section`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-top:1.85rem;
    gap:40px;
    height:500px;

    button{
        display:none;
    }

    @media(max-width:1145px){
        margin-top:0.9rem;
        gap:20px;

        button{
            display:block;
        }
    }



`

export const SectionDataUser = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:1.95rem;
    width:100%;
    max-width:428px;
    gap:61px;

    button{
        margin-top:-2.2rem;
    }

    @media(max-width:1145px){
        margin-top:12rem;
        gap:20px;
    }

`

export const DataContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:60px;
    height:500px;
`

export const DivisorFinal = styled.hr`
    width:90%;
    align-self:center;
    margin:3.5rem 0 3.93rem 0;

    @media(max-width:1145px){
        display:none;
    }
`

export const ButtonSaveContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    button{
        width:100%;
        max-width:456px;
    }

    @media(max-width:1145px){
        display:none;
    }
    
`

