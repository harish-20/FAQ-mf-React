import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import FAQ from './pages/FAQ'

const App = () => (
  <div className="">
    <FAQ />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
