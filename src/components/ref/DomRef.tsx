import { useRef, useEffect } from "react";

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null) //specify the dom type of the input

useEffect(() => {
  inputRef.current?.focus()
}, [])
return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
)
}