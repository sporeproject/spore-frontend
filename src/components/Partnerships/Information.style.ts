import styled from "styled-components";
import { MediaQuery, Spacing } from "../../css-in-js";

export const PartnersWrapper = styled.div`
  margin: auto;
  width: 55%;

  img {
    height: 75px;
  }

  ${MediaQuery.LessThanMedium} {
    padding: 0 0;
    width: 100%;

    img {
      height: ${Spacing.Spacing7};
    }
  }
`