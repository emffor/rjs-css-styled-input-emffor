import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 20rem;
    height: 10rem;

    padding: 2.5rem 2.5rem;
    
    border-width: 2px;
    border-style: solid;
    border-color: #32353E;
    border-radius: 4px;

    background: #171B24;
    
    label {
        color: #FFFFFF;

        font-size: 1rem;
        font-weight: 500;

        margin-bottom: 0.5rem;

        user-select: none;

        span {
            color: #FF5276;
        }
    }

    input {
        width: 200px;

        font-size: 1rem;

        color: #FFFFFF;
        background: #0D1015;

        border: 2px solid #FF5276;
        border-radius: 0.375rem;
        outline: none;

        padding: 0 1rem;
        height: 2.5rem;

        transition: border-color 0.2s, box-shadow 0.2s;

        :focus {
            border-color: #FE8D79;
            box-shadow: 0 0 0 0.125rem #FE8D79;
        }

        :focus:not(:focus-within):hover {
            border-color: #FE8D79;
        }
    }
`;