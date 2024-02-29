import styled from "styled-components";
import {  Spacing } from "../../css-in-js";
export const MarketStat = styled.div`
  text-align: center; 
  width: 100%;

  span {
    font-size: 16px;
  }
`
export const UpdateBox = styled.div`
  
  display: flex;
  justify-content: space-between;

  background-color: #FFF;
  border-radius: 16px;

  padding: ${Spacing.Spacing1};
  box-shadow: 0px 32px 32px rgb(31 47 70 / 12%);
  &:hover {
    box-shadow: 0px 32px 32px rgb(31 47 70 / 24%);
  }




  span {
    font-size: 16px;
  }
`
