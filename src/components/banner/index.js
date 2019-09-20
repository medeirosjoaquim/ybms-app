import React from 'react'
import PropTypes from 'prop-types'

function Banner(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.imgSrc}</div>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string
}

export default Banner