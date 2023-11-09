import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'


export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <>
        <div className='w-full h-screen flex justify-center items-center absolute text-white'>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Instructions</h3>
        <p>There will be 10 questions to solve.<br />Click on save and next for the next question.<br />There is no previous button.<br />In the last question, it will show how many questions are correct out of 10.<br /><b>ALL THE BEST</b></p>
    </div>
</div>

     
        <div className='w-full' style={{ position: 'fixed', bottom: '10%', right: '20%' }}>
    <div className='flex justify-end items-center'>
        <button onClick={() => setStart(true)} className='border border-orange-500 p-3 text-5xl rounded-lg bg-white hover:text-white hover:bg-orange-500'>Start</button>
    </div>
</div>

        </>
    )
}
