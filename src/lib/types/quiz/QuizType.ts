export type QuizType = {
  module_id: number;
  question: string;
  options: string[];
  correct: number;
};
export type QuizModules = {
  id: number;
  title: string;
  text: string;
};
