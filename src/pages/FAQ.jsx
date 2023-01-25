import React, { useState } from 'react'
import Questions from '../components/Questions'
import { DUMMY_DATA } from '../Dummy-data/Data'

const FAQ = () => {
  const [currentHeading, serCurrentHeading] = useState(0)

  const headings = DUMMY_DATA.map((e) => e.heading)

  const toggleHeading = (heading) => {
    serCurrentHeading(heading)
  }
  return (
    <section>
      <div className="text-center bg-gray-300 py-4">
        <h1 className="text-2xl text-gray-600 font-medium">FAQ</h1>
      </div>
      <div className="flex justify-between items-center gap-x-4 px-20 ">
        {headings.map((heading, index) => (
          <h2
            className={
              heading === DUMMY_DATA[currentHeading].heading
                ? 'flex-1 py-4 text-center text-xl cursor-pointer border-b-4 border-blue-600'
                : 'flex-1 py-4 text-center text-xl cursor-pointer'
            }
            key={heading}
            onClick={() => toggleHeading(index)}
          >
            {heading}
          </h2>
        ))}
      </div>
      <Questions questions={DUMMY_DATA[currentHeading].questions} />
    </section>
  )
}

export default FAQ
