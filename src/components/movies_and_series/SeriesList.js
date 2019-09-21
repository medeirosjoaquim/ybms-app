import React, { Component } from 'react'
import {useSelector} from 'react-redux'
import {baseurl} from '../../config/base-url'
import './styles.scss'

const getSeries =  () => {
  let {series} = useSelector(state => state);
  return series.results;
}
const SeriesList = () => {
  console.log(getSeries())
    return (
      <div>
        series list
      </div>
    )
}

export default SeriesList
