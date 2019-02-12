import React from 'react'

const Button = ({ text, onClick }) => (
        <button  onClick={onClick} className="btn btn-danger btn-lg mt-4 mb-3">
            {text}
        </button>
)



export { Button }