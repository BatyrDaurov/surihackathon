import React, { memo } from "react";
import s from "./SectionTitle.module.scss";

type Props = {
  text: string;
  className?: string;
  align?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
};

export const SectionTitle = memo((props: Props) => {
  const { text, className, align = "left" } = props;
  return (
    <h2 className={`${s.title} ${className}`} style={{ textAlign: align }}>
      {text}
    </h2>
  );
});
