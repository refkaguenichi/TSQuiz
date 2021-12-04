import React from "react";
//types
import { AnswerObject } from "../App";
//styles
import { ButtonWrapper, Wrapper } from "./../QuestionCard.styles";

type Item = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNb: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Item> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNb,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question:{questionNb}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <>
        {answers.map((answer: any) => {
          return (
            <ButtonWrapper
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button disabled={!!userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </ButtonWrapper>
          );
        })}
      </>
    </Wrapper>
  );
};

export default QuestionCard;
