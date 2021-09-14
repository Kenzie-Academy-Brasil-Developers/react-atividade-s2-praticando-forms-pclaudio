import styled from "styled-components";

export const DataSection = styled.section `
  margin: 0 auto;

  @media(min-width: 768px) {
    width: 500px;
  }
`;

export const Title = styled.p `
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Data = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
`;

export const Button = styled.button`
  background-color: #007aff;
  color: white;
  cursor: pointer;
  padding: 15px 0;
  width: 100%;
  border: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;