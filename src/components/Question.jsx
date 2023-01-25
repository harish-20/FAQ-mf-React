import React, { useState } from 'react'
import Icon from './Icon'

const Question = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div
      className="py-2 border-gray-400 border-b-2"
      key={props.question.question}
    >
      <div className="flex justify-between items-center" onClick={toggleIsOpen}>
        <h3 className="text-lg font-semibold text-gray-600 py-4">
          {props.question.question}
        </h3>
        <div>
          <Icon
            style={
              isOpen
                ? {
                    transform: 'rotate(-180deg)',
                    marginRight: '16px',
                    transition: 'all 0.5s',
                  }
                : {
                    transform: 'rotate(0deg)',
                    marginRight: '16px',
                    transition: 'all 0.5s',
                  }
            }
          />
        </div>
      </div>
      <div
        style={isOpen ? { height: '100px' } : { height: '0px' }}
        className="transition-all duration-500 overflow-hidden"
      >
        <p className="w-3/5">{props.question.answer}</p>
      </div>
    </div>
  )
}

export default Question
