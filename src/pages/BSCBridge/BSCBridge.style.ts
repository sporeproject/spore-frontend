import styled from "styled-components";
import { MediaQuery } from "../../css-in-js";

export const TransferButton = styled.button`
  width: 25rem;

  ${MediaQuery.LessThanMedium} {
    width: 100%;
  }
`

interface CardBridgeProps {
  type?: string
}

export const CardBridge = styled.div<CardBridgeProps>`
  border-radius: ${props => props.type === 'avalanche' ? 
    '0.625rem 0 0 0.625rem' : '0 0.625rem 0.625rem 0'
  };

  ${MediaQuery.LessThanLarge} {
    border-radius: ${props => props.type === 'avalanche' ? 
      '0.625rem 0.625rem 0 0' : '0 0 0.625rem 0.625rem'
    };
  }
`