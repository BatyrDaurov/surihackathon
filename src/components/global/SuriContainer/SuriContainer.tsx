import React from "react";
import s from "./SuriContainer.module.scss";

export const SuriContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${s.container} ${className}`}>{children}</div>;
};
