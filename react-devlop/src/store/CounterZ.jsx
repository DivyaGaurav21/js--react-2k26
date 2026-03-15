import React from 'react'
import useCounter from './useCounterStore'

const CounterZ = () => {
    const {count , increment , decrement} = useCounter()
  return (
    <div>
        <p>Zustand</p>
        <h2>{count }</h2>
        <button className='btn' onClick={increment}>inc</button>
        <button className='btn' onClick={decrement}>dec</button>
    </div>
  )
}

export default CounterZ