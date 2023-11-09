import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <div className='w-full h-screen flex justify-center items-center p-2'>
            <div className='w-[40%] border border-orange-500 shadow-lg rounded-md overflow-hidden bg-white text-center p-3'>
                <h2 className='text-2xl p-3 my-2'>{correct} are correct out of {quizzes.length}</h2>
                <button onClick={playAgain} className='border border-orange-500 p-3 text-2xl rounded bg-orange-500 text-white hover:bg-white hover:text-orange-500'>Play agian</button>
            </div>
        </div>
    )
}
