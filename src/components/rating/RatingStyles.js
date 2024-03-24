import styled from 'styled-components';

export const Container = styled.div`
position: absolute; /* або 'fixed', якщо потрібно прикріпити до вікна перегляду */
bottom: 10px; /* Піднімає контейнер вище від низу на 20px */
left: 0; /* Вирівнювання зліва для ширини на 100% */
right: 41%; /* Вирівнювання справа для ширини на 100%, змінено з 43% */
display: flex;
justify-content: center;
align-items: center;
min-height: 20vh;
font-size: 12px;
font-weight: 700;
z-index: 1;


`;

export const Radio = styled.input`
  display: none;
`;

export const Rating = styled.div`
  cursor: pointer;
  display: flex; 
`;
