import { useState, useEffect } from 'react'

export function Typing() {
  const languages = [
    'HTML.',
    'CSS.',
    'JavaScript.'
  ]
  
  const message = useTypewriter({ 
    text: languages, 
    direction: 'both', 
    repeat: -1, 
    speed: 100
  })
  
  return <h1>Hi! I like to code in {message}</h1>
}

export default function useTypewriter({
  text = ['Hello World!'], 
  direction = 'forward', 
  repeat = 0,
  speed = 200
}) {
  // In case user tries to break it 
  text = text ?? 'Hello World!'
    
  const textArr = Array.isArray(text) ? text : [text]
    
  const [message, setMessage] = useState<String>('')
  const [textCount, setTextCount] = useState<Number>(0)
  const [repeatCount, setRepeatCount] = useState<Number>(repeat)
  
  let interval: unknown | null | undefined 
  let index = 0
  
  const type = (str:String) => {
    interval = setInterval(() => {
      if (index > str.length) {
        clearInterval(interval)
        if (direction === 'both') backspace(str)
      } else {
        setMessage(str.slice(0, index))
        index++
      }    
    }, speed)
  }
  
  const backspace = (str:String ) => {
    interval = setInterval(() => {
      if (index < 0) {
        clearInterval(interval)
        setTextCount((prevCount:Number) => ++prevCount)
      } else {
        setMessage(str.slice(0, index))
        index--
      }
    }, speed)
  }
  
  const typingInit = () => {
    if (textCount >= textArr.length) {
      if (repeatCount > 0 ) setRepeatCount((prev: Number) => prev - 1)
       setTextCount(0)
    } else {
      if (direction === 'forward' || direction === 'both') {
        type(textArr[textCount])
      } else if (direction === 'backward') {
        backspace(textArr[textCount])
      }
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => typingInit(), [textCount])
  
  return message
}



