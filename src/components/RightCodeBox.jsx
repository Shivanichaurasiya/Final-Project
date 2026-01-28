import React from 'react'
"use client"
import { useState,useEffect } from 'react'

const lines = [
    "<!DOCTYPE html>",
  "<html>",
  "<head>",
  "<title>Example</title>",
  "<link rel='stylesheet' href='styles.css'>",
  "</head>",
  "<body>",
  "<h1>Hello World</h1>",
  "</body>",
  "</html>",
  "!",

]

const RightCodeBox = () => {
    const [lineIndex,setLineIndex] = useState(0);
    const[charIndex,setCharIndex] = useState(0);
    const[display,setDisplay] = useState(Array(lines.length).fill(""));

    useEffect(()=>{
        if(lineIndex<lines.length){
            if(charIndex<lines[lineIndex].length)
            {
                const timer = setTimeout(()=>{
                    const updated =[...display];
                    updated[lineIndex] += lines[lineIndex][charIndex];
                    setDisplay(updated)
                    setCharIndex(charIndex+1)

            },40);
            return()=>clearTimeout(timer);
            } else{
                setTimeout(()=>{
                    setLineIndex(lineIndex+1);
                    setCharIndex(0);
                },200)
            }   
        }else{
            setTimeout(()=>{
                setDisplay(Array(lines.length).fill(""));
                setLineIndex(0);
                setCharIndex(0);

            },2000);
        }
    
    },[charIndex,lineIndex]);

  return (
    <div className="border border-white w-100 h-70 border-transparent hover:border-yellow-400 transition duration-300">
        <pre className='font-mone text-sm leading-6'>
            {lines.map((_,i)=>(
                <div key={i} className='flex'>
                    {/* Fixed number cloumn */}
                    <span className='w-10 text-right pr-4 text-gray-500 select-none shrink-0'>{i+1}</span>

                    {/* code column */}
                    <span className='text-yellow-400 whitespace-pre'>
                        {display[i]}
                        {i === lineIndex && <span className='animate-blink'>|</span>}
                    </span>

                </div>
            ))}
        </pre>
      
    </div>
  )
}

export default RightCodeBox
