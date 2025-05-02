// components/missions/FinalChallengeMission.js
import React, { useState } from 'react';
import '../Missions.css';

function FinalChallengeMission({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [reflection, setReflection] = useState('');
  const [reflectionSubmitted, setReflectionSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  const questions = [
    {
      id: 1,
      question: "What year was Bitcoin launched?",
      options: ["2007", "2008", "2009", "2010"],
      correctAnswer: "2009"
    },
    {
      id: 2,
      question: "What is the significance of the Genesis Block?",
      options: [
        "It contains the highest number of bitcoins mined", 
        "It was the first block in the Bitcoin blockchain", 
        "It was mined by an anonymous hacker", 
        "It contains the Bitcoin logo"
      ],
      correctAnswer: "It was the first block in the Bitcoin blockchain"
    },
    {
      id: 3,
      question: "How does decentralization benefit Bitcoin users?",
      options: [
        "It makes transactions faster", 
        "It increases transaction fees", 
        "It removes the need for trusted third parties", 
        "It simplifies the mining process"
      ],
      correctAnswer: "It removes the need for trusted third parties"
    },
    {
      id: 4,
      question: "Describe the role of private keys in cryptocurrency security.",
      options: [
        "They are used to hack other users' wallets", 
        "They allow users to access and control their funds", 
        "They are shared publicly to receive funds", 
        "They are managed by cryptocurrency exchanges"
      ],
      correctAnswer: "They allow users to access and control their funds"
    }
  ];

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers({...answers, [questionId]: answer});
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      questions.forEach(q => {
        if (answers[q.id] === q.correctAnswer) {
          correctCount++;
        }
      });
      setScore(correctCount);
      setQuizCompleted(true);
    }
  };

  const handleSubmitReflection = () => {
    if (reflection.trim().length > 20) {
      setReflectionSubmitted(true);
    }
  };

  return (
    <div className="mission-content">
      <h2>3.5 Knowledge Test: Bitcoin's Birthright</h2>
      <h3>Final Challenge</h3>
      
      <div className="mission-description">
        <p>
          In this final section, you'll take a comprehensive quiz covering all the 
          concepts learned in Realm 3, followed by a reflection on digital money's impact.
        </p>
      </div>
      
      {!quizCompleted ? (
        <div className="challenge-section">
          <h3>Bitcoin Trivia Showdown</h3>
          <div className="quiz-progress">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          
          <div className="quiz-question">
            <h4>{questions[currentQuestion].question}</h4>
            
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index}>
                  <input 
                    type="radio" 
                    name={`question-${questions[currentQuestion].id}`} 
                    value={option}
                    checked={answers[questions[currentQuestion].id] === option}
                    onChange={() => handleAnswerSelect(questions[currentQuestion].id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
            
            <button 
              onClick={handleNextQuestion}
              disabled={!answers[questions[currentQuestion].id]}
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
            </button>
          </div>
        </div>
      ) : (
        <div className="challenge-section">
          <div className="quiz-results">
            <h3>Quiz Results</h3>
            <p>You scored {score} out of {questions.length}!</p>
            
            {score === questions.length ? (
              <div className="perfect-score-message">
                <p>Perfect score! You're a Bitcoin Scholar!</p>
                <div className="trophy-icon">🏆</div>
              </div>
            ) : score >= questions.length / 2 ? (
              <div className="good-score-message">
                <p>Good job! You have a solid understanding of Bitcoin concepts.</p>
              </div>
            ) : (
              <div className="low-score-message">
                <p>Keep learning about Bitcoin to improve your knowledge.</p>
              </div>
            )}
          </div>
          
          <div className="reflection-section">
            <h3>Reflective Journal</h3>
            <p>Write a short reflection on how digital money could change your financial future.</p>
            
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Share your thoughts here..."
              disabled={reflectionSubmitted}
              rows={5}
            />
            
            {!reflectionSubmitted ? (
              <button 
                onClick={handleSubmitReflection}
                disabled={reflection.trim().length <= 20}
              >
                Submit Reflection
              </button>
            ) : (
              <div className="reflection-feedback">
                <p>Thank you for sharing your reflection on digital money!</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {quizCompleted && reflectionSubmitted && (
        <div className="mission-complete">
          <h3>Congratulations on completing Realm 3!</h3>
          <p>You've gained valuable knowledge about the digital money revolution.</p>
          <button className="next-mission-button" onClick={onComplete}>
            Continue to Bonus Challenge
          </button>
        </div>
      )}
    </div>
  );
}

export default FinalChallengeMission;