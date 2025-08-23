export type DebunkFakeType = {
  id: string;
  initial_message: string;
  initial_photo: string;
  xp_reward: number;
  steps: DebunkFakeStepType[];
  final_message: string;
};

export type DebunkFakeStepType = {
  question: string;
  options: {
    find_source: string;
    ask_friends: string;
    believe_it: string;
  };
  correct_option: string;
  feedback_correct: string;
  hint_incorrect: string;
};
