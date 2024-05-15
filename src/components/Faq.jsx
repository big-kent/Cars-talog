import { useState } from "react";
import { FAQ_DATA } from "./FaqData";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const handleOpenQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? "" : id);
  };

  const handleQuestionClassName = (id) => {
    return activeQuestion === id ? "active-question" : "";
  };

  const handleAnswerClassName = (id) => {
    return activeQuestion === id ? "active-answer" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content-title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-questions">
              {FAQ_DATA.map(({ id, question, answer }) => {
                return (
                  <div key={id} className="faq-box">
                    <div
                      id={id}
                      onClick={() => handleOpenQuestion(id)}
                      className={`faq-box-question ${handleQuestionClassName(
                        id
                      )}`}
                    >
                      <p>{question}</p>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div
                      id={id}
                      onClick={() => handleOpenQuestion(id)}
                      className={`faq-box-answer ${handleAnswerClassName(id)}`}
                    >
                      {answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;
