import React ,{useContext} from 'react'
import {ContexBox} from "../contex/Contex";
import './KewyboardNav.css'
export default function KeyboardNav() {
  const data = useContext(ContexBox)
  
  return (
    <div className='KewyboardNav'>
    {data.allWords.map((word)=>(
      <button className='words' value={word}>{word}</button>
    ))
    }
    </div>
  )
}
