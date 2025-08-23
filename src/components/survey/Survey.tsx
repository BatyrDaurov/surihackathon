import React from "react";
import s from "./Survey.module.scss";

type Props = { children: React.ReactNode };

export const Survey = ({ children }: Props) => {
  return <div className={s.survey}>{children}</div>;
};
