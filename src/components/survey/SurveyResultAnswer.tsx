import React from "react";
import s from "./Survey.module.scss";
import { SuriButton, SuriButtonStyles } from "@/components/shared";
import Image from "next/image";

type Props = {
  status: SurveyResultAnswerStatus;
  message?: string;
  buttonHandle?: () => void;
};

export enum SurveyResultAnswerStatus {
  false = "wrong",
  true = "right",
  end = "end",
}

export const SurveyResultAnswer = (props: Props) => {
  const { status, message, buttonHandle } = props;
  const survey_out = {
    notice: message || "Are you geniues?",
    result_title: "Congratulations!",
    button_text: "To the main page ->",
    icon_src: "/suriend.png",
  };

  switch (status) {
    case "wrong":
      survey_out.button_text = "<- Repeat";
      survey_out.result_title = "Try again";
      survey_out.icon_src = "/suriwrong.png";
      survey_out.notice = message || "Error";
      break;
    case "right":
      survey_out.button_text = "Next question ->";
      survey_out.result_title = "You're right";
      survey_out.icon_src = "/suritrue.png";
      survey_out.notice = message || "Error";
      break;

    default:
      break;
  }

  return (
    <div className={s.survey__answer}>
      <div className={s.survey__icon}>
        <Image src={survey_out.icon_src} alt="" width={135} height={135} />
      </div>
      <h3 className={s.survey__result_title}>{survey_out.result_title}</h3>
      <div className={s.survey__notice}>{survey_out.notice}</div>
      <SuriButton onClick={buttonHandle} style={SuriButtonStyles.text_button}>
        {survey_out.button_text}
      </SuriButton>
    </div>
  );
};
