import React from "react"

type InputProps = {
    value: string
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value}: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return (
        <input type="text" value={value} onChange={handleInputChange}/>
    )
}
//handleChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
//<input type="text" value={props.value} onChange={props.handleChange}/>
