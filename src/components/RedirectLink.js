import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logUserIn} from '../actions'

class RedirectLink extends Component {

  render() {
    const qs = new URLSearchParams(window.location.search)
    console.log(this.props);
    const {session} = this.props.state;
    console.log(qs.get('approved'))
    if (session !== undefined && session.success && (qs.get('approved')) === null || qs.get('approved') === false) {
      return (
        <div className="redirect--screen">
          <p className="h4">Hey, You must authorize the app!</p>
          <p>
            Click the button bellow to access the themoviedb.org and authorize this app.
          </p>
          <div>
            <a href={`https://www.themoviedb.org/authenticate/${session.request_token}?redirect_to=http://localhost:3000/log/`}><button type="button" className="btn btn-primary">Access themoviedb</button>
            </a>
          </div>
        </div>
      );
    } else if (qs.get('approved')) {
      console.log(qs.get('approved'))
      //this.props.logUserIn();
      return (
        <h2> aaaa</h2>
      )
    }
  }
}
const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ logUserIn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RedirectLink);