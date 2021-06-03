import styled from 'styled-components';
import { strongGrey, black } from '../../GlobalStyle';

export const FootetContainer = styled.footer`
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: ${strongGrey};

  & div {
    font-size: 14px;
    color: ${black};

    & span:first-child {
      font-weight: 700;
    }

    & span:last-child {
      display: none;
      @media (min-width: 768px) {
        display: inline;
      }
    }
  }
`;
