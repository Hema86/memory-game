import React from 'react'
const Card = (props) => {
  return (
    <div className={`card ${props.active || props.matched ? 'active' : ''}`} onClick={props.handleClick.bind(this, props.index)}>
      <div className='flipper'>
        <div className='front'>
          <img src='../img/js-badge.svg' alt='front' />
        </div>
        <div className='back' >
          <img src={props.item.img} alt='back' />
        </div>
      </div>
    </div>

  )
}

export default Card
