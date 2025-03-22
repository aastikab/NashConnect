import React, { useState } from "react";
import { motion } from "framer-motion";
import { sharedStyles } from "../styles/SharedStyles";
import { FaMedal, FaCheck, FaTimes, FaQuestionCircle, FaCoins } from 'react-icons/fa';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 4;
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const pointsPerCorrectAnswer = 25; // Points awarded per correct answer

  const questions = [
    {
      questionText: "What is the primary goal of Nashville's Neighborhood Street Traffic Calming Program?",
      options: [
        "Increase traffic speed in residential areas",
        "Reduce traffic congestion in highways",
        "Identify, prioritize, and mitigate undesirable traffic effects in neighborhoods",
        "Expand major roads in Nashville"
      ],
      correctAnswer: 2
    },
    {
      questionText: "How many hours does the average driver lose in congestion in Nashville?",
      options: [
        "50",
        "63",
        "75",
        "90"
      ],
      correctAnswer: 1
    },
    {
      questionText: "Which location is identified as the worst traffic hotspot in Nashville, TN?",
      options: [
        "Broadway & 2nd Ave",
        "I-24 W at Antioch Pike to Rocky Fork Rd",
        "Charlotte Ave & 21st Ave",
        "Nolensville Pike & Harding Place"
      ],
      correctAnswer: 1
    },
    {
      questionText: "What is Nashville's congestion rank in the United States??",
      options: [
        "5",
        "11",
        "27",
        "15"
      ],
      correctAnswer: 1
    }
  ];

  const getOptionStyle = (index) => ({
    ...optionStyle,
    background: showAnswer 
      ? index === questions[currentQuestion - 1].correctAnswer
        ? 'rgba(51, 255, 184, 0.2)' // Correct answer
        : index === selectedAnswer
          ? 'rgba(255, 51, 102, 0.2)' // Wrong answer
          : 'rgba(255, 184, 0, 0.1)' // Unselected
      : selectedAnswer === index
        ? 'rgba(255, 184, 0, 0.2)' // Selected
        : 'rgba(255, 184, 0, 0.1)', // Default
    border: showAnswer 
      ? index === questions[currentQuestion - 1].correctAnswer
        ? '1px solid var(--sound-wave)'
        : '1px solid var(--music-gold)'
      : '1px solid var(--music-gold)'
  });

  const handleAnswerClick = (answerIndex) => {
    if (!showAnswer && selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      setShowAnswer(true);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion - 1].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion <= totalQuestions) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 1) {
      setCurrentQuestion(prevQuestion);
      setSelectedAnswer(null);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(1);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const pageStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'var(--pure-white)',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '40px',
    color: 'var(--music-gold)',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center'
  };

  const questionCardStyle = {
    background: 'rgba(26, 27, 37, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '30px',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '600px',
    border: '2px solid var(--music-gold)',
    boxShadow: 'var(--neon-glow)',
    marginBottom: '30px'
  };

  const questionNumberStyle = {
    color: 'var(--music-gold)',
    fontSize: '1.2rem',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const questionTextStyle = {
    fontSize: '1.5rem',
    marginBottom: '30px',
    textAlign: 'center',
    color: 'var(--pure-white)',
    lineHeight: '1.4'
  };

  const optionStyle = {
    background: 'rgba(255, 184, 0, 0.1)',
    padding: '15px 20px',
    borderRadius: '12px',
    marginBottom: '15px',
    cursor: 'pointer',
    border: '1px solid var(--music-gold)',
    transition: 'all 0.3s ease',
    color: 'var(--pure-white)',
    fontSize: '1.1rem',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    position: 'relative',
    overflow: 'hidden'
  };

  const optionHoverStyle = {
    background: 'rgba(255, 184, 0, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--gold-glow)'
  };

  const ScoreDisplay = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        ...questionCardStyle,
        textAlign: 'center'
      }}
    >
      <FaMedal size={60} color="var(--music-gold)" style={{ marginBottom: '20px' }} />
      <h2 style={questionTextStyle}>
        Quiz Complete!
      </h2>
      <div style={{
        background: 'rgba(255, 184, 0, 0.1)',
        padding: '20px',
        borderRadius: '15px',
        marginBottom: '20px'
      }}>
        <p style={{ 
          fontSize: '1.2rem',
          marginBottom: '15px',
          color: 'var(--pure-white)'
        }}>
          You scored {score} out of {totalQuestions}
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            color: 'var(--music-gold)',
            fontSize: '1.4rem',
            fontWeight: 'bold'
          }}
        >
          <FaCoins />
          <span>+{score * pointsPerCorrectAnswer} Points Added!</span>
        </motion.div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {questions.map((question, index) => (
          <div
            key={index}
            style={{
              textAlign: 'left',
              padding: '15px',
              borderRadius: '10px',
              background: 'rgba(255, 184, 0, 0.1)',
              border: '1px solid var(--music-gold)'
            }}
          >
            <p style={{ 
              fontSize: '1rem',
              marginBottom: '10px',
              color: 'var(--music-gold)'
            }}>
              Question {index + 1}: {question.questionText}
            </p>
            <p style={{ 
              fontSize: '0.9rem',
              color: 'var(--sound-wave)'
            }}>
              <FaCheck style={{ marginRight: '5px' }} />
              Correct Answer: {question.options[question.correctAnswer]}
            </p>
          </div>
        ))}
      </div>

      <motion.button
        style={{
          background: 'var(--gradient-stage)',
          color: 'var(--pure-white)',
          padding: '12px 25px',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '20px',
          width: '100%'
        }}
        onClick={handleRestartQuiz}
        whileHover={{ transform: 'translateY(-2px)' }}
        whileTap={{ transform: 'translateY(0)' }}
      >
        Take Quiz Again
      </motion.button>
    </motion.div>
  );

  return (
    <div style={pageStyle}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={headerStyle}>
          <FaQuestionCircle size={32} />
          <h1>Community Knowledge Quiz</h1>
        </div>

        {!showScore ? (
          <>
            <motion.div
              style={questionCardStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p style={questionNumberStyle}>Question {currentQuestion} of {totalQuestions}</p>
              
              <h2 style={questionTextStyle}>
                {questions[currentQuestion - 1].questionText}
              </h2>

              <div>
                {questions[currentQuestion - 1].options.map((option, index) => (
                  <motion.button
                    key={option}
                    style={getOptionStyle(index)}
                    whileHover={!showAnswer ? optionHoverStyle : {}}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleAnswerClick(index)}
                    disabled={showAnswer}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>{option}</span>
                      {showAnswer && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring' }}
                        >
                          {index === questions[currentQuestion - 1].correctAnswer ? (
                            <FaCheck color="var(--sound-wave)" />
                          ) : index === selectedAnswer ? (
                            <FaTimes color="var(--guitar-red)" />
                          ) : null}
                        </motion.span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '600px'
              }}>
                <motion.button
                  style={{
                    background: 'var(--gradient-music)',
                    color: 'var(--pure-white)',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    opacity: currentQuestion === 1 ? 0.5 : 1,
                    cursor: currentQuestion === 1 ? 'not-allowed' : 'pointer'
                  }}
                  whileHover={currentQuestion !== 1 ? { transform: 'translateY(-2px)' } : {}}
                  disabled={currentQuestion === 1}
                  onClick={handlePreviousQuestion}
                >
                  Previous
                </motion.button>

                <motion.button
                  style={{
                    background: 'var(--gradient-stage)',
                    color: 'var(--pure-white)',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    boxShadow: 'var(--gold-glow)'
                  }}
                  whileHover={{ transform: 'translateY(-2px)' }}
                  whileTap={{ transform: 'translateY(0)' }}
                  onClick={handleNextQuestion}
                >
                  {currentQuestion === totalQuestions ? 'Finish Quiz' : 'Next'}
                </motion.button>
              </div>
            </motion.div>
          </>
        ) : (
          <ScoreDisplay />
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;
