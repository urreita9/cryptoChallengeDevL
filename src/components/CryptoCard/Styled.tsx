import styled from 'styled-components/native';

interface Bool {
  bool: boolean;
}

export const CryptoCardContainer = styled.View`
  //   padding-top: 30px;
  //   padding-bottom: 30px;
  //   background-color: tomato;
`;

export const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //   background-color: red;
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom-color: #8d8d8d;
  border-bottom-width: 1px;
`;

export const CryptoTextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;

export const TextColumn = styled.View`
  height: 50px;
  justify-content: space-evenly;
  align-items: ${({bool}: Bool) => (bool ? 'flex-end' : 'flex-start')};
  //   background-color: red;
  flex: 0.9;
`;

export const TextBold = styled.Text`
  font-weight: 500;
  font-size: 18px;
`;

export const TendencyText = styled.View`
  flex-direction: row;
  align-items: flex-end;
  //   text-align: right;
`;

export const PercentageText = styled.Text`
  color: ${({bool}: Bool) => (bool ? '#2CC54E' : '#FD483C')};
`;
