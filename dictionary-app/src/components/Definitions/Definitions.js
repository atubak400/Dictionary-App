import React from 'react'
import './definitions.css'

const Definitions = ({ word, category, meanings }) => {
  return (
    <div className='meanings'>
      {word === '' ? (
        <span className='subTitle'>Start by typing a word in search</span>
      ) : (
        'Something'
      )}
    </div>
  )
}

export default Definitions
