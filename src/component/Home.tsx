import React, { useState } from 'react';
import Design from './Design';
import { PETITION, GYAN } from '../helper/constant';
import getRandom from '../helper/randomInteger';
interface Props {
  title: string | null;
}

const Home: React.FC<Props> = ({ title }) => {
  const [request, setRequest] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [answerMode, setAnswerMode] = useState<string | boolean>(false);
  const [answer, setAnswer] = useState<string>('');
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const handleQuestion = (value: string) => {
    const inputKeyword: string = value.slice(-1);
    if (isAnswer) {
      setAnswer('');
      setIsAnswer(false);
      setIsLoader(false);
      setQuestion('');
      setRequest('');
    }

    if (inputKeyword === '.') {
      setAnswerMode(!answerMode);
      return;
    }
    if (answerMode) {
      let currentPointer = request.length;
      setRequest(`${request}${PETITION[currentPointer]}`);
      setAnswer(`${answer}${inputKeyword}`);
    } else {
      setRequest(value);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target.name === 'request') handleQuestion(e.target.value);
    if (e?.target.name === 'question') setQuestion(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
      setIsAnswer(true);
      setRequest('');
      setRequest('');
    }, getRandom(5000, 3000));
    console.log(`~ answer`, answer);
    if (!answer) {
      setAnswer(GYAN[getRandom(GYAN.length, 0)]);
    }
  };

  return (
    <Design
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      request={request}
      question={question}
      isLoader={isLoader}
      isAnswer={isAnswer}
      answer={answer}
    />
  );
};

export default Home;
