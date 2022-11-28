import React, {useState , useRef , useEffect} from 'react'

const MutableRef = () => {

    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)//specify the interval type

    const stopTimer = () => {
        if (interValRef.current) 
        window.clearInterval(interValRef.current)
    }
    useEffect(() => {
      interValRef.current = window.setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    
      return () => {
        stopTimer()
      }
    }, [])
    
  return (
    <div>
        HookTimer - {timer} - 
        <button onClick={()=> stopTimer}>stopTimer</button>
    </div>
  )
}

export default MutableRef