import { ScreenSize } from './breakpoints';

export const MediaQuery = {
  isXS: `@media only screen and (min-width: ${ScreenSize.xsMin}px) and (max-width: ${ScreenSize.xsMax}px)`,
  isSmall: `@media only screen and (min-width: ${ScreenSize.smMin}px) and (max-width: ${ScreenSize.smMax}px)`,
  isMedium: `@media only screen and (min-width: ${ScreenSize.mdMin}px) and (max-width: ${ScreenSize.mdMax}px)`,
  isLarge: `@media only screen and (min-width: ${ScreenSize.lgMin}px) and (max-width: ${ScreenSize.lgMax}px)`,

  LessThanSmall: `@media only screen and (max-width: ${ScreenSize.xsMax}px)`,
  GreaterThanSmall: `@media only screen and (min-width: ${ScreenSize.mdMin}px)`,
  LessThanMedium: `@media only screen and (max-width: ${ScreenSize.smMax}px)`,
  GreaterThanMedium: `@media only screen and (min-width: ${ScreenSize.lgMin}px)`,
  LessThanLarge: `@media only screen and (max-width: ${ScreenSize.mdMax}px)`,
};
