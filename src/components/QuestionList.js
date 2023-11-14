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

  function handleUpdate(id, newAnswer) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({correctIndex: newAnswer}),
    })
    .then((r) => r.json())
    .then((updatedQuestion) => {
      const updatedQuestions = questions.map((q) => {
        if (q.id === updatedQuestion.id) return updatedQuestion;
        return q;
      });
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
            <button onClick={() => handleUpdate(question.id )}>Update Answer</button>

          </li>
)
          
        })}</ul>
    </section>
  );
}

export default QuestionList;
