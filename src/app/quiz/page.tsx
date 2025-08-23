"use client";
import React from "react";
import { Loader, SectionTitle } from "@/components/shared";
import { SuriContainer } from "@/components/global";
import { Survey } from "@/components/survey/Survey";
import { SurveySelect } from "@/components/survey/SurveySelect";
import { QuizModules, QuizType } from "@/lib/types";
import {
  SurveyResultAnswer,
  SurveyResultAnswerStatus,
} from "@/components/survey/SurveyResultAnswer";
import { useRouter } from "next/navigation";
import s from "./QuizPage.module.scss";

enum QuizState {
  choosing = 0,
  isStarted = 1,
  isFinished = 2,
}

async function getQuizData() {
  const data = await fetch(`/api/quiz`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export default function Quiz() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const [allQuizes, setAllQuizes] = React.useState<QuizModules[]>();
  const [currentQuiz, setCurrentQuiz] = React.useState<QuizType>();
  const [quizState, setQuizState] = React.useState<QuizState>(
    QuizState.choosing
  );

  const getData = async () => {
    try {
      const data: QuizModules[] = await getQuizData();
      setAllQuizes(data);
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
      <div className={s.quiz}>
        <SectionTitle className={s.quiz__title} text="Quiz" />
        {!isLoading ? (
          <Survey>
            {quizState === QuizState.choosing && (
              <>
                <SurveySelect
                  buttonHandle={async (e) => {
                    if (allQuizes) {
                      setIsLoading(true);
                      const data = await fetch(
                        `api/quiz/${e.currentTarget.id}`
                      );
                      setCurrentQuiz(await data.json());
                      setQuizState(QuizState.isStarted);
                      setIsLoading(false);
                    }
                  }}
                  answers={allQuizes?.map((quiz) => quiz.title) || []}
                  question="There are many themes"
                  step="🔍 Choose your topic"
                />
              </>
            )}
            {quizState === QuizState.isStarted && (
              <SurveySelect
                buttonHandle={(e) => {
                  if (currentQuiz) {
                    if (parseInt(e.currentTarget.id) === currentQuiz?.correct) {
                      alert("Right!");
                      setQuizState(QuizState.isFinished);
                    } else {
                      alert("You should read the question more carefully");
                    }
                  }
                }}
                answers={currentQuiz?.options || []}
                question={currentQuiz?.question || ""}
                step={"Find the truth"}
              />
            )}

            {quizState === QuizState.isFinished && (
              <SurveyResultAnswer
                buttonHandle={() => {
                  router.replace("/");
                }}
                message={"This is the end"}
                status={SurveyResultAnswerStatus.end}
              />
            )}
          </Survey>
        ) : (
          <Loader />
        )}
      </div>
    </SuriContainer>
  );
}
