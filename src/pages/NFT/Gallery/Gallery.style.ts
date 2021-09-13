
import styled from "styled-components";
import { Spacing } from "../../../css-in-js";

export const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const GalleryItem = styled.div`
  align-items: center;
  background-color: #FFF;
  border-radius: 16px;
  flex: 1;
  margin: ${Spacing.Spacing2} ${Spacing.Spacing1};
  overflow: hidden;
  padding: ${Spacing.Spacing1};
  transition: all 0.1s ease-in;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  .main-wrapper {
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    width: 100%;

    img {
      height: auto;
      transition: all 0.1s ease-in;
      width: 100%;
    }
    
    .info-wrapper {
      background-color: rgba(0,0,0,0.75);
      bottom: 0;
      color: #ffffff;
      height: ${Spacing.Spacing12};
      padding: ${Spacing.Spacing1};
      position: absolute;
      text-align: center;
      width: 100%;
    }
  }
`