import React, { useContext, useState } from 'react';
import { QuizContext } from '../Context/QuizHolder';

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    );
}

const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        if (current + 1 === quizzes.length) {
            setExit(true);
        } else {
            next(current + 1);
        }
    };
    return (
        <div className='w-[40%] border shadow-lg rounded-lg overflow-hidden text-center bg-white'>
            <div className='p-2 text-3xl my-4'>{current + 1}) {quizzes[current].question}</div>
            <div className='mt-4'>
                {['a', 'b', 'c', 'd'].map((option) => (
                    <div
                        key={option}
                        className={`p-3 pl-6 border text-white-500 flex items-center justify-left ${
                            ans === option ? 'bg-blue-500' : ''
                        } hover:bg-blue-500 hover:text-white duration-200 cursor-pointer`}
                        onClick={() => setAns(option)}
                    >
                        <input
                            type='radio'
                            id={`option${current}${option.toUpperCase()}`} // Added current to make the name unique for each question
                            name={`option${current}`} // Set a unique name for each set of radio buttons
                            value={option}
                            checked={ans === option} // Set checked property to maintain the state
                            onChange={() => setAns(option)}
                        />
                        <label className='ml-2' htmlFor={`option${current}${option.toUpperCase()}`}>
                            {quizzes[current][option]}
                        </label>
                    </div>
                ))}
            </div>
            <div className='flex justify-between my-4 '>
                <div className='cursor-pointer h-[30px] px-3 bg-red-500 text-white rounded-lg flex items-center justify-center' onClick={() => setAns('')}>
                    Reset
                </div>
                <div className='cursor-pointer h-[30px] px-3 bg-green-500 rounded-lg text-white flex items-center justify-center' onClick={saveHandler}>
                    Save & Next
                </div>
                <div className='cursor-pointer h-[30px] px-3 bg-red-500 rounded-lg text-white flex items-center justify-center' onClick={() => setExit(true)}>
                    Exit
                </div>
            </div>
        </div>
    );
}
