import styled from "styled-components";
import { MediaQuery, Spacing } from "../../../css-in-js";

export const MarketStat = styled.div`
  text-align: center; 
  width: 100%;

  span {
    font-size: 16px;
  }
`

export const ItemNFT = styled.div`
  align-items: center;
  background-color: #FFF;
  border-radius: 16px;
  cursor: pointer;
  flex: 1;
  margin-bottom: ${Spacing.Spacing2};
  overflow: hidden;
  padding: ${Spacing.Spacing1};
  transition: all 0.1s ease-in;
  box-shadow: 0px 32px 32px rgb(31 47 70 / 12%);

  &:hover {
    box-shadow: 0px 32px 32px rgb(31 47 70 / 24%);

    img {
      transform: scale(1.1);
    }
  }

  .image-wrapper {
    border-radius: 16px;
    overflow: hidden;
    width: 100%;

    img {
      transition: all 0.1s ease-in;
      width: 100%;
    }
  }

  .item-description {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    // align-content: end;
    padding: ${Spacing.Spacing2} 0;

    ${MediaQuery.LessThanSmall} {
      flex-direction: column;
      text-align: center;
    }

    span {
      font-weight: bold;
      color:black;
      padding: 0 ${Spacing.Spacing1};
    }
  }
`

export const TagPrice = styled.div`
  align-items: center;
  color: #52C41A;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
  padding: 0 ${Spacing.Spacing1};
      
  background: #F6FFED;      
  border: 1px solid #B7EB8F;
  box-sizing: border-box;
  border-radius: 4px;
      
  flex: none;
  order: 1;
  flex-grow: 0;
  justify-content: center;
`

export const EmptyNFTWrapper = styled.div`
  text-align: center; 
  width: 100%;

  h4 {
    color: #6B4E3B;
    font-weight: bold;
  }
`