import { useState } from 'react';
import './TestWatermelon.css';

function TestWatermelon() {
  const questions = [
    {
      question: "Do you often need to report the details of your fruit purchases to your partner, such as how much money you spent or what fruits you bought?",
      options: ["Yes", "No"],
    },
    {
      question: "Does your partner restrict you from buying certain types of fruit or from shopping at specific fruit stores?",
      options: ["Yes", "No"],
    },
    {
      question: "When buying fruit, has your partner ever threatened not to let you buy your favorite fruits or threatened to throw away the fruits you bought?",
      options: ["Yes", "No"],
    },
    {
      question: "When you bring home a type of fruit that he/she doesn't like, does your partner criticize your choice?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you need your partner's consent to decide what fruit to buy, or do you need his/her agreement to use the money for buying fruits?",
      options: ["Yes", "No"],
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [result, setResult] = useState('');

  const handleOptionChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const negativeResponses = answers.filter(answer => answer === "Yes").length;
    if (negativeResponses >= 3) {
      setResult("Your answers suggest you may be in an unhealthy relationship. We recommend using the 'Buy Watermelon' feature or consulting the resource library for help.");
    } else {
      setResult("Your relationship appears to be healthy. If you have any doubts or need help, please do not hesitate to contact a professional.");
    }
  };

  return (
    <div className="test-watermelon">
      <h1>Fruit Buying Habits Survey</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          {question.options.map(option => (
            <label key={option}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleOptionChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Survey</button>
      {result && <div><p>{result}</p></div>}
    </div>
  );
}

export default TestWatermelon;

