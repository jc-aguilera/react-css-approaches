import React from 'react'
import './App.css'
import SubParagraph from './components/SubParagraph'
import AnotherSubParagraph from './components/AnotherSubParagraph'

function App() {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="header">Hello! I should be green, but I'm not</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nisi corporis quidem minima error deleniti similique, unde, praesentium aperiam maxime in autem eaque officiis modi obcaecati eos tempore repellat! Aspernatur!
            </p>
          </div>
        </div>
      </div>
      <SubParagraph />
      <AnotherSubParagraph />
    </div>
  )
}

export default App
