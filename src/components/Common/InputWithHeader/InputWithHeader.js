import React from 'react'

function InputWithHeader(props) {
    return (
            <div className={`${props.class}`}>
                    <p className=' my-1 px-1'>{props.name}</p>
                    <input className='form-control' onChange={(e) => props.setInput(e.target.value)}></input>
            </div>
    )
}

export default InputWithHeader
