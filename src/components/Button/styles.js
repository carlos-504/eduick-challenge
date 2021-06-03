import styled from 'styled-components';
import { primaryPurple, yellow, strongPurpleSec } from '../../GlobalStyle';

export const Btn = styled.a`
  color: ${primaryPurple};
  font-weight: bold;
  font-size: 14px;
  padding: 15px 42px;
  border-radius: 4px;
  background-color: ${yellow};
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #eec845;
    color: ${strongPurpleSec};
  }
`;
