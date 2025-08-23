import React, { memo } from "react";
import s from "./SuriButton.module.scss";

type Props = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: SuriButtonStyles;
  id?: string;
};

export enum SuriButtonStyles {
  primary = "button",
  for_survey = "survey",
  text_button = "text",
}

export const SuriButton = memo((props: Props) => {
  const { children, onClick, style = SuriButtonStyles.primary, id } = props;
  return (
    <button id={id} onClick={onClick} className={s[style]}>
      {children}
    </button>
  );
});
