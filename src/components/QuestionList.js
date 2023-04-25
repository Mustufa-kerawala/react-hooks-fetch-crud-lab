import React, {useState,useEffect} from "react";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => {
        // console.log(questions);
        setQuestions(questions);
      });
  }, []);

  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map((question) => {
          return <li key={question.id}>{question.prompt} 
          
           </li>

        })}</ul>
    </section>
  );
}

export default QuestionList;
