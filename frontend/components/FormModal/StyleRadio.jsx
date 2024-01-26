import styled from "styled-components";

export const RadioStyle = styled.p`

  display: flex;
  gap: 15px;

  & input {
    position: absolute;
    left: -9999px;
  }



  & svg path {
    fill: var(--yellow);
  }

  & label {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    width: 147px;
    height: 80px;
    border: 1px solid var(--white);
    border-radius: 4px;
    cursor: pointer;
    font-family: Roboto;
    font-weight: 400;
  }

  & span {
    display: block;
    color: var(--white)
  }

  & input:focus + label {
    outline: var(--yellow);
    outline-offset: 2px;
  }

  & input:checked + label {
    background-color: var(--yellow);
    border: var(--yellow);
  }

  & input:checked + label span {
    color: var(--1-Background);
    font-family: Roboto;
    font-weight: 400;
  }

  & input:checked + label svg path {
    fill: var(--1-Background);
  }
`
;