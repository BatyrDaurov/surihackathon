"use client";
import React from "react";
import s from "./Survey.module.scss";
import { SuriButton, SuriButtonStyles } from "../shared";

type Props = {
  step: string;
  question: string;
  buttonHandle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  answers: any[];
};

export const SurveySelect = (props: Props) => {
  const { answers, step, question, buttonHandle } = props;

  return (
    <div className={s.survey__select}>
      <h3 className={s.survey__step}>{step}</h3>
      <p className={s.survey__question}>{question}</p>
      <div className={s.survey__answers}>
        {answers.map((answer, key) => (
          <SuriButton
            style={SuriButtonStyles.for_survey}
            key={answer}
            id={`${key}`}
            onClick={buttonHandle}
          >
            {answer}
          </SuriButton>
        ))}
      </div>
    </div>
  );
};
