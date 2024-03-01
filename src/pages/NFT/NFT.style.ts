import styled from "styled-components";
import { Spacing } from "../../css-in-js";
export const MarketStat = styled.div`
  text-align: center; 
  width: 100%;

  span {
    font-size: 16px;
  }
`

interface UpdateBoxProps {
  circleColor?: string;
}

export const UpdateBox = styled.button<UpdateBoxProps>`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: #FFF;
  border-radius: 16px;
  padding: ${Spacing.Spacing1} ${Spacing.Spacing2} ${Spacing.Spacing1} ${Spacing.Spacing4};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px 0px;
  outline: none;
  position: relative;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 20px 0px;
  }

  &::before{
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    left: ${Spacing.Spacing2};
    width: 10px;
    height: 10px;
    background-color:  ${(props) => props.circleColor || '#000'};;
    border-radius: 50%;
  }
`
