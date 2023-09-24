import React, { useState } from "react";
import "./Test.css";

function Test() {
  const [openModal,setOpenModal] = useState(false)
  const handleOpenModal = () =>{
    setOpenModal(true)
  }
   const handleCloseModal = () => {
     setOpenModal(false);
   };
  const [questions, setQuestions] = useState([
    {
      question:
        "1. Какие из перечисленных прав человека являются основными в Кыргызстане?",
      options: [
        "Право на жизнь",
        "Право на бесплатное жилье",
        "Право на свободу передвижения",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "2. Что такое Конституция и какое ее значение в юридической системе Кыргызстана?",
      options: [
        "Конституция - это книга с законами",
        "Конституция - это основной закон страны, на котором базируются остальные законы и правила",
        "Конституция - это список правительства",
      ],
      correctAnswer: 1,
    },
    {
      question: "3. Какие права имеют граждане в сфере свободы слова?",
      options: [
        "Граждане могут свободно выражать свое мнение",
        "Граждане не имеют права говорить о политике",
        "Граждане могут высказывать только положительные мнения",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "4. Что такое судебная власть и какова ее роль в юридической системе Кыргызстана?",
      options: [
        "Судебная власть - это право судить других граждан",
        "Судебная власть - это власть судов и их независимость в рассмотрении дел и вынесении решений",
        "Судебная власть - это право президента назначать судей",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "5. Что означает право на образование и как оно обеспечивается в Кыргызстане?",
      options: [
        "Право на образование означает, что граждане имеют право ходить в школу",
        "Право на образование означает доступность и бесплатность образования на всех уровнях",
        "Образование не является правом граждан",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "6. Какие меры предусмотрены для защиты прав детей в Кыргызстане?",
      options: [
        "Дети не имеют особых прав",
        "Законы о правах ребенка, включая право на образование, здоровье и защиту от насилия",
        "Дети имеют только право на игру",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "7. Какие права имеют граждане на участие в выборах и референдумах?",
      options: [
        "Граждане имеют право голосовать, участвовать в выборах и референдумах",
        "Граждане могут только наблюдать за выборами",
        "Граждане имеют право голосовать только на федеральных выборах",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "8. Что такое право на частную собственность и как оно защищено?",
      options: [
        "Право на частную собственность означает, что граждане могут владеть и распоряжаться своими вещами",
        "Граждане не имеют права на собственность",
        "Право на частную собственность означает, что граждане имеют право на собственность только на землю",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "9. Какие законы и правила регулируют деятельность организаций и предпринимателей в Кыргызстане?",
      options: [
        "Деятельность организаций и предпринимателей не регулируется законами",
        "Деятельность организаций и предпринимателей регулируется Налоговым кодексом",
        "Деятельность организаций и предпринимателей регулируется различными законами и нормативами",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "10. Какие права имеют граждане на доступ к информации и медиа?",
      options: [
        "Граждане имеют право на доступ к информации, включая медиа, и свободу выражения мнения",
        "Граждане не имеют права на доступ к информации и медиа",
        "Граждане имеют право на доступ только к государственным источникам информации",
      ],
      correctAnswer: 0,
    },
  ]);

  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    new Array(questions.length).fill(null)
  );

  const handleAnswerClick = (questionIndex, optionIndex) => {
    const isCorrect = optionIndex === questions[questionIndex].correctAnswer;
    setUserAnswers((prevUserAnswers) => {
      const updatedUserAnswers = [...prevUserAnswers];
      updatedUserAnswers[questionIndex] = isCorrect ? "correct" : "incorrect";
      return updatedUserAnswers;
    });

    if (isCorrect) {
      setScore(score + 1);
    }
  };
 const styletest = {
   Text: "center",
    padding: "20px"
 }
 const questionConStyle = {
  marginbottom: "20px"
 }
 const buttonStyle = {
    marginright: "10px",
  padding: "10px 20px",
  border: "1px solid #ccc",
  backgroundcolor: "#f0f0f0",
  cursor:"pointer"
 }
  return (
    <div className="test" style={styletest}>
      <h2 className="title">Тест по Законам и Правам в Кыргызстане</h2>
      <div className="question-container" style={questionConStyle}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question">
            <p>{question.question}</p>
            <div className="options">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  style={buttonStyle}
                  onClick={() => handleAnswerClick(questionIndex, optionIndex)}
                  className={`${
                    userAnswers[questionIndex] === "correct"
                      ? "correct"
                      : userAnswers[questionIndex] === "incorrect"
                      ? "incorrect"
                      : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
     
      <div className="res">
        Ваш результат: {score} из {questions.length}
      </div>
    </div>
  );
}

export default Test;
