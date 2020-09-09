import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.2;
  background: #00008b;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;

  > h1 {
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > button {
    display: flex;
    padding: 10px;
    margin-top: 20px;
    border-radius: 25px;
    width: 60%;
    background: #1e90ff;
    border: none;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 10px;
      font-size: 16px;
    }
  }
`;

export const List = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: 0.4s all;
  border-radius: 10px;

  &:hover {
    background: green;
  }

  > span {
    margin-left: 10px;
    font-size: 16px;
  }
  > div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: red;
    margin-left: auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
