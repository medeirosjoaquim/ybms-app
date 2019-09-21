import React, { Component } from 'react'
import { logUserIn } from '../actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class Log extends Component {
  qs = new URLSearchParams(window.location.search)
  componentDidMount() {
    console.log('logando..')
  }
  render() {
    return (
      <div>
        logou!...
      </div>
    )
  }
}
const mapStateToProps = state => ({ state: state.testeDataRequest });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logUserIn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Log);