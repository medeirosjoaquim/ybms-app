// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTracklist } from '../actions';
type TrackProp =  {
  artist: {name: string, url: string},
  name: string,
  duration: number,
}
type TrackListProps = {
   album: {
      name: string,
      artist: string,
      url: string,
      image: string[],
      listeners: string,
      playcount: string,
      tracks: TrackProp[],
      tags: string,
  },
  requestTracklist: any;
}



class Tracks extends React.Component<TrackListProps> {
  discography = JSON.parse(localStorage.getItem('discography'));
  results;
  componentDidMount() {
      this.props.requestTracklist();
  }

   toMMSS = inputSeconds => {
    const secs = parseInt( inputSeconds, 10 );
    let minutes = Math.floor( secs / 60 );
    let seconds = secs - minutes * 60;

    if ( 10 > minutes ) {
        minutes = '0' + minutes;
    }
    if ( 10 > seconds ) {
        seconds = '0' + seconds;
    }

    // Return display.
    return minutes + ':' + seconds;
  };

//albums map
albumMap = (x, i) =>

  x  && !String(x.album.name).match(/null/g) && x.album.tracks.track.length > 0  ?
  <div id="album-container" key={i} >
  <div id="album-card">
     <div className="card-header bg-dark text-white ">
      <div id="main">
        <div id="d1"><img src={x.album.image[3]["#text"]} alt={x.album.name} className="albumCoversm" />
        </div>
            <div id="d2">
              <div id="album-name">{x.album.name}</div>
              <div id="artist-name">{x.album.artist}</div>
            </div>
       </div>
      </div>
        <div className="card-body">
        {x.album.tracks.track.map(this.tracklistMap)}
      </div>
      </div>
  </div> : '';

tracklistMap = (x,i) =>
  <div  key={i} >
   <div  className="container">
    <div id="song-info" className="row">
        <div id="song-name">{i} . {x.name}</div>
         <div id="song-duration">{x.duration !== '0' ? this.toMMSS(x.duration) : ''}</div>
    </div>
   </div>
  </div>;
  render() {
  //const results = this.props.tracks;

    this.results = this.props.tracks;

    return this.results !== undefined && this.results.length > 0 ?
      <div>

        {this.results.map(this.albumMap)}
      </div>

      :
      <div>
        <div className="loading"></div>
    </div>;
    }
  }

const mapStateToProps = state => ({ tracks: state.datatracklist });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestTracklist }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);