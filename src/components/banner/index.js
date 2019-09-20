import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
function Banner(props) {
  return (
    <div className='banner'>
      <div className='banner--img'>
        <img src={props.imgSrc} alt={props.imgAlt}></img>
      </div>
      <div className='banner--title'>{props.title}</div>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}

export default Banner