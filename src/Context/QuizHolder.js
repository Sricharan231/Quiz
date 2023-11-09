import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
        {
            "question": "What is the correct command to create a new React project?",
            "a": "npx create-react-app appname",
            "b": "npm install create-react-app",
            "c": "npx install create-react-app -g",
            "d": "install - l create-react-app",
            "correct": "a"
        },
        {
            "question": "In React.js which one of the following is used to create a class for Inheritance ?",
            "a": "Create",
            "b": "Extends",
            "c": "Inherits",
            "d": "Delete",
            "correct": "b"
        },
        {
            "question": "What is the default port number in which the application run ?",
            "a": "3000",
            "b": "8080",
            "c": "5000",
            "d": "3030",
            "correct": "a"
        },
        {
            "question": "Which of the following valid component return type of React ?",
            "a": "2",
            "b": "5",
            "c": "1",
            "d": "3",
            "correct": "c"
        },
        {
            "question": "Which of the following is a way to handle data in React.js ?",
            "a": "State & Props",
            "b": "Services & Components",
            "c": "State & Services",
            "d": "State & Component",
            "correct": "a"
        },
        {
            "question": "Which of the following is must for the API in React.js ?",
            "a": "SetinitialComponent",
            "b": "renderComponent",
            "c": "render",
            "d": "All of the above",
            "correct": "c"
        },
        {
            "question": "Which of the following is true regarding Babel ?",
            "a": "Compiler",
            "b": "Transpiler",
            "c": "Both of the above",
            "d": "None of the above",
            "correct": "c"
        },
        {
            "question": "In React.js, how we can pass the data from one component to another in React.js ?",
            "a": "SetState",
            "b": "Render with arguments",
            "c": "Props",
            "d": "PropTypes",
            "correct": "c"
        },
        {
            "question": "Which of the following function is true about changing the state in React.js ?",
            "a": "this.State{}",
            "b": "this.setState",
            "c": "this.setChangeState",
            "d": "All of the above",
            "correct": "b"
        },
        {
            "question": "Which of the following method is true about referring parent class in React.js ?",
            "a": "self()",
            "b": "inherits()",
            "c": "this()",
            "d": "super()",
            "correct": "d"
        }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
