import React from 'react'

const Weather = ({country , city ,tempreature , humidity ,description , error }) => {
  return (
    <div className='info'>
      {
        country && <p className='info_key'> country: 
        
        <span className='info_value'>{country}</span> 
        
        </p>
      }
      {
        city && <p className='info_key'> city: 

        <span className='info_value'>{city}</span>

        </p>
      }
      {
        tempreature && <p className='info_key'> tempreature: 

        <span className='info_value'>{tempreature}</span>

        </p>
      }
      {
        humidity && <p className='info_key'> humidity:
        
        <span className='info_value'>{humidity}</span>

        </p>
      }
      {
        description && <p className='info_key'> description: 
        
        <span className='info_value'>{description}</span>

        
        </p>
      }
      {
        error && <p className='info_key'> error: 
        
        <span className='info_value'>{error}</span>

        
        </p>
      }
    </div>
  )
}

export default Weather
