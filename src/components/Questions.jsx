import React from 'react'
import Question from './Question'

const Questions = (props) => {
  return (
    <div className="flex flex-col px-20 mt-6 cursor-pointer">
      {props.questions.map((question) => (
        <Question question={question} key={question.question} />
      ))}
    </div>
  )
}

export default Questions
