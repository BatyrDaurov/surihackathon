"use client";
import React from "react";
import { SuriContainer } from "@/components/global";
import { Loader, SectionTitle } from "@/components/shared";
import { Survey } from "@/components/survey/Survey";
import { SurveyWelcome } from "@/components/survey/SurveyWelcome";
import { DebunkFakeType } from "@/lib/types";
import { SurveySelect } from "@/components/survey/SurveySelect";
import {
  SurveyResultAnswer,
  SurveyResultAnswerStatus,
} from "@/components/survey/SurveyResultAnswer";
import { useRouter } from "next/navigation";
import s from "./DebunkFakePage.module.scss";

async function getAllFakes() {
  const data = await fetch(`api/debunks`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export default function DebunkFake() {
  const [fakeArticle, setFakeArticle] = React.useState<DebunkFakeType>();
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [lastAnswerInfo, setLastAnswerInfo] = React.useState({
    isPrevWasTrue: false,
    prevMessage: "",
    isCheckTime: false,
  });
  const [isStarted, setIsStarted] = React.useState(false);
  const [isFinal, setIsFinal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  const getData = async () => {
    try {
      const data: DebunkFakeType = await getAllFakes();
      console.log(data);

      setFakeArticle(data);
    } catch (err) {
      console.log(err);
      alert("Seems like mistake...");
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <SuriContainer>
      <div className={s.debunk_fake}>
        <SectionTitle className={s.debunk_fake__title} text="Debunk a fake" />
        {isLoading ? (
          <Loader />
        ) : (
          <Survey>
            {isStarted && !lastAnswerInfo.isCheckTime && !isFinal && (
              <SurveySelect
                buttonHandle={(e) => {
                  const choosenAnswer = Object.keys(
                    fakeArticle?.steps[questionNumber].options || {}
                  )[parseInt(e.currentTarget.id)];
                  const correctAnswer =
                    fakeArticle?.steps[questionNumber].correct_option;

                  console.log(
                    Object.values(
                      fakeArticle?.steps[questionNumber].options || {}
                    )[questionNumber]
                  );

                  setLastAnswerInfo((_) => ({
                    isCheckTime: true,
                    prevMessage:
                      (correctAnswer === choosenAnswer
                        ? fakeArticle?.steps[questionNumber].feedback_correct
                        : fakeArticle?.steps[questionNumber].hint_incorrect) ||
                      "",

                    isPrevWasTrue: correctAnswer === choosenAnswer,
                  }));
                }}
                answers={Object.values(
                  fakeArticle?.steps[questionNumber].options || {}
                )}
                question={fakeArticle?.steps[questionNumber].question || ""}
                step={`Question ${questionNumber + 1}/${
                  fakeArticle?.steps.length
                }`}
              />
            )}
            {isStarted && !isFinal && lastAnswerInfo.isCheckTime && (
              <SurveyResultAnswer
                buttonHandle={() => {
                  if (fakeArticle) {
                    if (questionNumber + 1 < fakeArticle?.steps.length) {
                      if (lastAnswerInfo.isPrevWasTrue)
                        setQuestionNumber((prev) => (prev += 1));

                      setLastAnswerInfo({
                        ...lastAnswerInfo,
                        isCheckTime: false,
                      });
                    } else {
                      setIsFinal(true);
                    }
                  }
                }}
                message={lastAnswerInfo.prevMessage}
                status={
                  lastAnswerInfo.isPrevWasTrue
                    ? SurveyResultAnswerStatus.true
                    : SurveyResultAnswerStatus.false
                }
              />
            )}
            {!isStarted && !isFinal && !isLoading && (
              <SurveyWelcome
                banner={fakeArticle?.initial_photo || ""}
                subtitle={fakeArticle?.initial_message || ""}
                buttonHandle={() => setIsStarted(true)}
                description="Let's look into this 'news' together. Where do you think we should start checking?"
                buttonText="Start now"
              />
            )}
            {isStarted && !isLoading && isFinal && (
              <SurveyResultAnswer
                buttonHandle={() => {
                  router.replace("/");
                }}
                message={"That's all"}
                status={SurveyResultAnswerStatus.end}
              />
            )}
          </Survey>
        )}
      </div>
    </SuriContainer>
  );
}
