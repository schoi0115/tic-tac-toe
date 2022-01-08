import React from 'react'
import { useState } from 'react'
const Box = ({turn, changeTurn}) => {
    const [text, setText] = useState('')

    
    function toggle(){
        if (text === ''){
            setText(turn)
            changeTurn()
        }
    }
    function refresh(){
        window.refresh()
    }

    return(
        <div className="box" onClick={toggle}>{text}
        </div>
    )
}

export default Box