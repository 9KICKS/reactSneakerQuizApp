import React, { useState } from "react";
import "../styles/Quiz.css"

function Quiz() {
    const sneakerQuestion = [
        {
            id: 1,
            question: "The Big Red Boots were made by an art collective known as?",
            image: require("../../../assets/images/MSCHF Big Red Boot.jpg"),
            options: [
                { answerText: "Concepts", isCorrect: false },
                { answerText: "MSCHF", isCorrect: true },
                { answerText: "Asics", isCorrect: false },
                { answerText: "Mizuno", isCorrect: false },
            ],
        },

        {
            id: 2,
            question: "Which musician collaborated with Nike to make the Air Force 1 'Certified Lover Boy'?",
            image: require("../../../assets/images/Drake x Nike Air Force 1.jpg"),
            options: [
                { answerText: "Future", isCorrect: false },
                { answerText: "Travis Scott", isCorrect: false },
                { answerText: "J. Cole", isCorrect: false },
                { answerText: "Drake", isCorrect: true },
            ],
        },

        {
            id: 3,
            question: "What year was the first Adidas Samba released?",
            image: require("../../../assets/images/Adidas Samba OG.jpg"),
            options: [
                { answerText: "1950", isCorrect: true },
                { answerText: "1940", isCorrect: false },
                { answerText: "1960", isCorrect: false },
                { answerText: "1930", isCorrect: false },
            ],
        },

        {
            id: 4,
            question: "The first Jumpman logo first appeared on which Air Jordan?",
            image: require("../../../assets/images/Nike Air Jordan 3s.jpg"),
            options: [
                { answerText: "Air Jordan III", isCorrect: true },
                { answerText: "Air Jordan I", isCorrect: false },
                { answerText: "Air Jordan V", isCorrect: false },
                { answerText: "Air Jordan IV", isCorrect: false },
            ],
        },

        {
            id: 5,
            question: "Converse All-Stars was named after which professional basketball player?",
            image: require("../../../assets/images/Converse.jpg"),
            options: [
                { answerText: "Magic Johnson", isCorrect: false },
                { answerText: "LeBron James", isCorrect: false },
                { answerText: "Michael Jordan", isCorrect: false },
                { answerText: "Chuck Taylor", isCorrect: true },
            ],
        },

        {
            id: 6,
            question: "What year was the Nike Cortez sneaker first released?",
            image: require("../../../assets/images/Nike Cortezs.jpg"),
            options: [
                { answerText: "2022", isCorrect: false },
                { answerText: "1972", isCorrect: true },
                { answerText: "1982", isCorrect: false },
                { answerText: "1992", isCorrect: false },
            ],
        },

        {
            id: 7,
            question: "What was the original name of the Vans Old Skool sneaker?",
            image: require("../../../assets/images/Vans Old Skool.jpg"),
            options: [
                { answerText: "Style 23", isCorrect: false },
                { answerText: "Style 19", isCorrect: false },
                { answerText: "Style 36", isCorrect: true },
                { answerText: "Style 77", isCorrect: false },
            ],
        },

        {
            id: 8,
            question: "What is the design inspiration behind the Nike Benassi slides?",
            image: require("../../../assets/images/Nike Benassi Slides.jpg"),
            options: [
                { answerText: "Foam RNNR", isCorrect: false },
                { answerText: "Geta", isCorrect: true },
                { answerText: "Adilette", isCorrect: false },
                { answerText: "Mule", isCorrect: false },
            ],
        },

        {
            id: 9,
            question: "Who is the designer of the Adidas Yeezy NSLTD boots?",
            image: require("../../../assets/images/Adidas Yeezy NSLTD Boot.jpg"),
            options: [
                { answerText: "Travis Scott", isCorrect: false },
                { answerText: "Donald Glover", isCorrect: false },
                { answerText: "Pharrell Williams", isCorrect: false },
                { answerText: "Kanye West", isCorrect: true },
            ],
        },

        {
            id: 10,
            question: "Who founded A Bathing Ape?",
            image: require("../../../assets/images/Bape SK8 STA.jpg"),
            options: [
                {answerText: "Nigo", isCorrect: true},
                {answerText: "Kanye West", isCorrect: false},
                {answerText: "Kid Cudi", isCorrect: false},
                {answerText: "Virgil Abloh", isCorrect: false},
            ],
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < sneakerQuestion.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-page">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {sneakerQuestion.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{sneakerQuestion.length}
                        </div>
                        <div className="question-text">
                            <img src={sneakerQuestion[currentQuestion].image} alt="" />
                            {sneakerQuestion[currentQuestion].question}
                        </div>
                    </div>
                    <div className="answer-section">
                        {sneakerQuestion[currentQuestion].options.map((options, index) => (
                            <button key={index} className="answer-button" onClick={() => handleAnswerOptionClick(options.isCorrect)}>{options.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
        );
}

export default Quiz;