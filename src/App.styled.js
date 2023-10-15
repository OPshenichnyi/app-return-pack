import styled from "styled-components";

export const Container = styled.div`
margin: auto;
display: flex;
flex-direction: row;
width: 1280px;
background-color: yellow;

@media (max-width: 768px) {
    width: 768px;
    background-color: red;
  }

@media (max-width: 375px) {
    width: 375px;
    background-color: green;
  }
`