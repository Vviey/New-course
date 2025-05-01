import React, { useState, useEffect, ChangeEvent } from 'react';

// Types
interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  scenario: string;
  question: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
  reflection: string;
}

interface ReflectionAnswers {
  [key: string]: string;
}

const ScenarioQuizEngine = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [reflectionAnswers, setReflectionAnswers] = useState<ReflectionAnswers>({});
  const [showFinalChallenge, setShowFinalChallenge] = useState<boolean>(false);
  const [finalChallengeAnswer, setFinalChallengeAnswer] = useState<string>('');
  const [progressPercentage, setProgressPercentage] = useState<number>(0);

  const questions: Question[] = [
    {
      id: 'q1',
      scenario: 'A government imposes currency controls, limiting how much money citizens can withdraw from banks',
      question: 'What is the primary risk demonstrated in this scenario?',
      options: [
        { id: 'a', text: 'Inflation reducing purchasing power' },
        { id: 'b', text: 'Government confiscation of wealth' },
        { id: 'c', text: 'Banking system technical failures' },
        { id: 'd', text: 'Currency exchange rate volatility' }
      ],
      correctAnswer: 'b',
      explanation: 'This scenario demonstrates how governments can control access to citizens\' money through banking regulations, effectively confiscating wealth by preventing people from accessing their own funds. This happened in countries like Greece (2015), Cyprus (2013), and Argentina (2001, 2019).',
      reflection: 'How would you prepare if you suspected your government might impose currency controls?'
    },
    {
      id: 'q2',
      scenario: 'A country experiences 50% annual inflation, while the central bank continues to print money',
      question: 'What effect does this monetary policy have on society?',
      options: [
        { id: 'a', text: 'It primarily hurts wealthy investors' },
        { id: 'b', text: 'It helps redistribute wealth to lower-income groups' },
        { id: 'c', text: 'It unfairly transfers wealth from savers to debtors' },
        { id: 'd', text: 'It has minimal impact on everyday citizens' }
      ],
      correctAnswer: 'c',
      explanation: 'High inflation caused by money printing effectively transfers wealth from savers to debtors (including governments). Those on fixed incomes or with cash savings see their purchasing power rapidly decline, while asset holders and those with debts benefit as the real value of their debts decreases.',
      reflection: 'Who benefits and who suffers when a currency rapidly loses value through inflation?'
    },
    {
      id: 'q3',
      scenario: 'A woman is denied access to her bank account because she donated to a political protest movement',
      question: 'What key feature of fiat banking systems does this demonstrate?',
      options: [
        { id: 'a', text: 'Transaction efficiency' },
        { id: 'b', text: 'Financial surveillance and censorship' },
        { id: 'c', text: 'Consumer protection measures' },
        { id: 'd', text: 'Interest rate mechanisms' }
      ],
      correctAnswer: 'b',
      explanation: 'This scenario demonstrates how centralized banking systems enable financial surveillance and censorship. Because banks and payment processors act as gatekeepers, they can monitor, block, or reverse transactions based on political pressure, their own policies, or government mandates.',
      reflection: 'How might financial surveillance affect free speech and political participation?'
    },
    {
      id: 'q4',
      scenario: 'Bitcoin supply is limited to 21 million coins, while central banks can create unlimited amounts of fiat currency',
      question: 'What key difference does this highlight?',
      options: [
        { id: 'a', text: 'Fiat currency has more practical applications' },
        { id: 'b', text: 'Bitcoin cannot be effectively regulated' },
        { id: 'c', text: 'Fiat currency value is backed by governments' },
        { id: 'd', text: 'Bitcoin has programmatic scarcity while fiat has artificial abundance' }
      ],
      correctAnswer: 'd',
      explanation: 'This scenario highlights the fundamental difference in scarcity models. Bitcoin has programmatic scarcity - its supply is capped by code and becomes more predictable and harder to change over time. Fiat currencies have artificial abundance - central authorities can create unlimited supply based on policy decisions.',
      reflection: 'How does predictable scarcity versus unlimited supply affect how people save and plan for the future?'
    },
    {
      id: 'q5',
      scenario: 'A merchant is blocked from receiving payments because they sell legal products that violate a payment processor\'s terms of service',
      question: 'What challenge does this situation reveal about the current financial system?',
      options: [
        { id: 'a', text: 'Merchants need better awareness of terms of service' },
        { id: 'b', text: 'Payment companies have too much regulatory oversight' },
        { id: 'c', text: 'Private companies act as unelected financial regulators' },
        { id: 'd', text: 'Online payment systems are technologically unreliable' }
      ],
      correctAnswer: 'c',
      explanation: 'This scenario reveals how payment processors and banks act as unelected financial regulators. Even when selling legal products or services, businesses can be cut off from the financial system based on changing corporate policies, pressure campaigns, or risk assessments that lack transparency or due process.',
      reflection: 'What are the implications of corporations having the power to determine who can and cannot participate in commerce?'
    }
  ];

  const finalChallenge = {
    title: "Design Challenge: Money That Can't Be Weaponized",
    description: "Based on what you've learned about the risks of centralized financial control, describe the key properties that would make a monetary system resistant to censorship, confiscation, and political manipulation.",
    prompt: "A truly sovereign money system would need to have these characteristics:"
  };

  useEffect(() => {
    const calculateProgress = () => {
      if (quizCompleted) return 100;
      return Math.round((currentQuestionIndex / questions.length) * 100);
    };
    setProgressPercentage(calculateProgress());
  }, [currentQuestionIndex, quizCompleted, questions.length]);

  const handleAnswerSelect = (answerId: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answerId;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReflectionChange = (questionId: string, value: string) => {
    setReflectionAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleFinalChallengeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFinalChallengeAnswer(e.target.value);
  };

  const showFinalChallengeSection = () => {
    setShowFinalChallenge(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setScore(0);
    setQuizCompleted(false);
    setShowExplanation(false);
    setReflectionAnswers({});
    setShowFinalChallenge(false);
    setFinalChallengeAnswer('');
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>{/* The full JSX structure goes here */}</div>
  );
};

export default ScenarioQuizEngine;
