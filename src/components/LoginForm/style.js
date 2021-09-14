import styled from "styled-components";

export const FormSection = styled.section`
  margin: 0 auto;

  @media(min-width: 768px) {
    width: 500px;
  }
`;

export const InputUserData = styled.input`
  border-style: none;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: transparent;
  padding: 15px 10px;
  margin-bottom: 10px;
  width: 100%;
  letter-spacing: 1px;
  color: gray;
  font-size: 1.1rem;
  font-weight: 500;

  ::placeholder {
    color: gray;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const InputPassword = styled(InputUserData)`
  @media(min-width: 768px) {
    width: 49%;
  }
`;

export const InputDDD = styled(InputUserData)`
  width: 29%;
`;

export const InputPhone = styled(InputUserData)`
  width: 69%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AgreementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px;
`;

export const AgreementCheckbox = styled.input`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`;

export const AgreementLabel = styled.label`
  color: #d5d5d5;
  font-size: 1.1rem;
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

export const ErrorMessage = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: red;
  margin-bottom: 10px;
`;