import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/CounterSlice'


export default function App() {
  const count = useSelector((state) => state.counterkey.data )
  const dispatch = useDispatch()
  return (
    <div>
    <div className='main'>
      <button id='increment' aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button id='decrement' aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  </div>
  )
}
