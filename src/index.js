import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const csdnOptimizer = document.createElement('div')
csdnOptimizer.id = 'csdn-optimizer'
document.body.appendChild(csdnOptimizer)
ReactDOM.render(<App />, csdnOptimizer)