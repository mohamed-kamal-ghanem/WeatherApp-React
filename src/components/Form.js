import React from 'react'

const Form = ({getWeather}) => {
  return (
    <form onSubmit={getWeather}>
      <input type='text' name="country" placeholder='Country...' />
      <input type='text' name="city" placeholder='City...' />
      <button>Get Weather</button>
    </form>
  )
}

export default Form
