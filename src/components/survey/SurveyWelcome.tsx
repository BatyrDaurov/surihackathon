import React from "react";
import { SuriButton } from "@/components/shared";
import Image from "next/image";
import s from "./Survey.module.scss";

type Props = {
  title?: string;
  subtitle: string;
  description: string;
  banner?: string;
  buttonText?: string;
  buttonHandle?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SurveyWelcome = (props: Props) => {
  const {
    title = "Sensation!",
    subtitle,
    description,
    buttonText,
    buttonHandle,
    banner,
  } = props;
  return (
    <div className={s.survey_welcome}>
      {banner && (
        <div className={s.survey_welcome__banner}>
          <Image width={380} height={380} alt={title} src={banner} />
        </div>
      )}
      <div className={s.survey_welcome__info}>
        <h3>{title}</h3>
        <p className={s.survey_welcome__title}>{subtitle}</p>
        <p className={s.survey_welcome__description}>{description}</p>
        <SuriButton onClick={buttonHandle}>{buttonText || "Начать"}</SuriButton>
      </div>
    </div>
  );
};
