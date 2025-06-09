import styled from "styled-components";
import {  Spacing } from "../../../css-in-js";

export const MarketStat = styled.div`
  text-align: center; 
  width: 100%;

  span {
    font-size: 16px;
  }
`

export const BoxOrderBy = styled.div`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  
  .dropdown .btn{
    background-color: #E8334F;
    border: none;
  }
`

export const ItemNFT = styled.div`
  align-items: center;
  background-color: #FFF;
  border-radius: 16px;
  flex: 1;
  margin-bottom: ${Spacing.Spacing2};
  overflow: hidden;
  padding-bottom: 0;
  transition: all 0.1s ease-in;
  box-shadow: 0px 32px 32px rgb(31 47 70 / 12%);
  position: relative;
  overflow: hidden;
  

  .nft-id{
    text-align: right;
    font-weight: bold;
  }

  .button-wrapper{
    width: 100%;
    height: 40px;
    

    button {
      background-color: #E8334F;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px 0px;
      position: relative;
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all .4s;
      color: white;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
    }

    .nft-buy-button{
      background-color: #E8334F;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px 0px;
      position: relative;
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all .4s;
      color: white;
      font-weight: bold;
      font-size: 14px;
  
      &.approve,
      &.buy{
        bottom: -40px;
      }
    }
    
    &:hover{
      .nft-buy-button{
        font-size: 16px;
        bottom: -40px;
        &.approve,
        &.buy{
          bottom: 0;
        }
      }
    }
  }

  .image-wrapper {
    border-radius: 16px;
    overflow: hidden;
    width: 100%;
    padding: ${Spacing.Spacing1};

    img {
      transition: all 0.1s ease-in;
      border-radius: 16px;
      width: 100%;
    }
  }

  .item-description {
    padding: ${Spacing.Spacing1};
    font-weight: bold;
    font-size: 14px;

    div{
      line-height: 20px;
    }
  }

  &:hover {
    box-shadow: 0px 32px 32px rgb(31 47 70 / 24%);

    img {
      transform: scale(1.05);
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
    color: #2C3158;
    font-weight: bold;
  }
`

export const GridIcon = styled.div`
width: 1em;
height: 1em;
display: grid;
grid-template-columns:  repeat(2, 1fr);
gap: 2px;

.grid-box{
  background-color: currentColor;
  width: 6px;
  border: none;
  height: 6px;
}
`

export const OptionsButtons = styled.div`
  display: grid;
  grid-template-columns: 3rem 3rem;
  height: 2rem;
  background-color: white;

  .button-item{
    border: none;
    display: flex;
    align-items: center;
    justify-content:  center;
    height: 100%;
    background-color: white;
    border-radius: 4px;

    &.active{
      background-color: #E8334F;
      color: white;
    }
  }
`