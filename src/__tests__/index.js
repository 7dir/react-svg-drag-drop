import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'

import React, {useState} from 'react'
import {render, fireEvent} from 'react-testing-library'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}

test('renders counter', () => {
  const {getByText} = render(<Counter />)
  getByText('0')
  fireEvent.click(getByText(/click me/i))
  getByText('1')
})
