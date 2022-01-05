import React from 'react'
import ReactDOM from 'react-dom'
import {useState, useRef} from 'react'
import Matter from 'matter-js'

const Circle = ({x, y, radius, fill_color, stroke_color, strokeWidth}) => {
  const [position, setPosition] = useState({x: x, y: y, coords: {}})

  const handleMouseMove = useRef((e) => {
    setPosition((position) => {
      const xDiff = position.coords.x - e.pageX
      const yDiff = position.coords.y - e.pageY
      return {
        x: position.x - xDiff,
        y: position.y - yDiff,
        coords: {
          x: e.pageX,
          y: e.pageY,
        },
      }
    })
  })

  const handleMouseDown = (e) => {
    const pageX = e.pageX
    const pageY = e.pageY
    setPosition((position) =>
      Object.assign({}, position, {
        coords: {
          x: pageX,
          y: pageY,
        },
      }),
    )
    document.addEventListener('mousemove', handleMouseMove.current)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove.current)
    setPosition((position) => Object.assign({}, position, {coords: {}}))
  }

  return (
    <>
      <circle
        cx={position.x}
        cy={position.y}
        r={radius}
        fill={fill_color}
        stroke={stroke_color}
        strokeWidth={strokeWidth}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <circle
        cx={position.x}
        cy={position.y}
        r={5}
        fill={'white'}
        stroke={'black'}
        strokeWidth={2}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </>
  )
}
const Group1 = () => {
  let objArray = [
    {
      x: 10,
      y: 10,
      radius: 10,
      fill_color: 'grey',
      stroke_color: 'black',
      strokeWidth: 1,
    },
    {
      x: 100,
      y: 10,
      radius: 40,
      fill_color: 'grey',
      stroke_color: 'black',
      strokeWidth: 1,
    },
    {
      x: 200,
      y: 10,
      radius: 30,
      fill_color: 'grey',
      stroke_color: 'black',
      strokeWidth: 1,
    },
  ]
  let x, y, radius, fill_color, stroke_color, strokeWidth
  return objArray.map((obj) => {
    return (
      <Circle
        x={obj.x}
        y={obj.y}
        radius={obj.radius}
        fill_color={obj.fill_color}
        stroke_color={obj.stroke_color}
        strokeWidth={obj.strokeWidth}
      />
    )
  })
}
const App = () => {
  return (
    <svg
      style={{
        border: '1px solid green',
        height: '300px',
        width: '80%',
      }}
    >
      <Group1 />
      <Circle
        x={80}
        y={80}
        radius={30}
        fill_color={'green'}
        stroke_color={'black'}
        strokeWidth={3}
      />
      <Circle
        x={150}
        y={150}
        radius={30}
        fill_color={'green'}
        stroke_color={'black'}
        strokeWidth={3}
      />
    </svg>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
