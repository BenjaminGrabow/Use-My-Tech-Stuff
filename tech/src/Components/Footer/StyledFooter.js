import styled from 'styled-components';

const StyledFooter = styled.footer`

.bottom{
display: flex;
justify-content: space-around;

@media (max-width:700px) {
        flex-direction: column;
}
}

.footer-left {

        h1 {
                font-size: 3rem;
        }

        p {
                font-size: 1.5rem;    
        }

}

.footer-right {
        display: flex;

        @media (max-width:605px) {
        flex-direction: column;
}

        .row {
                padding: 0 1rem;

                @media (max-width:605px) {
                 padding: 0;
}
        }

        h4 {
                font-size: 1.7rem;

                @media (max-width:605px) {
                        font-size: 2.5rem;
                        margin: .5rem 0 0 0 ;
       }
}
        
        p{
                font-size: 1.3rem;
                color: black;
                font-weight: bold;

                @media (max-width:605px) {
                        font-size: 1.5rem;
                        font-weight: 100
       }
        }
}
`;

export default StyledFooter;