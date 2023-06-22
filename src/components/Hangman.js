import React from 'react'
import '../style/Hangman.css'
export default function Hangman() {
  return (
    <div className='Hangman'>
      <div className='Foundation'></div>
      <div className='frame'></div>
      <div className='pate'></div>
      <div className='hanging'></div>
      <div className='head'>
        <div className='eyes'></div>
        <div className='eyes'></div>
        <div className='mouth'></div>
      </div>
      <div className='body'></div>
      <div className='Rhand'></div>
      <div className='lhand'></div>
      <div className='Rfoot'></div>
      <div className='Lfoot'></div>

    </div>
  )
}
