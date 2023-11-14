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

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedQuestions = questions.filter((q) => q.id !== id);
        setQuestions(updatedQuestions);
      });
  }

  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map((question) => {
          return (
          <li key={question.id}>
            {question.prompt} 
            <button onClick={() => handleDelete(question.id)}>Delete Question</button>

          </li>
)
          
        })}</ul>
    </section>
  );
}

export default QuestionList;
