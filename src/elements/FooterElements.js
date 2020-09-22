import styled from "styled-components"

export const FooterWrapper = styled.footer`
    grid-column: 1 / span 14;
    min-height: 11.25rem;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid ${props => props.theme.colors.dark1};
`

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    & p {
        text-align: center;
        flex: 0 0 100%;
    }
`

export const FooterSocialIcons = styled.div`
    flex: 0 0 100%;
    margin-bottom: 2rem;

    h2 {
        padding: 2rem;
    }

    img {
        height: 22px;
        padding: 0 1rem;
        transition: filter 0.3 ease;
    }

    img:hover, img:focus {
        filter: brightness(50%);
    }
`