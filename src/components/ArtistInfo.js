// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestArtistInfo } from '../actions';

type ArtistInfoProps = {
  data:
  {
    name: string,
    url:string,
    image:any,
    streamable:string,
    ontour:string,
    stats:string,
    similar:string,
    tags:{tag: []},
    bio: {
      links: {
        rel: string,
        href: string
      },
      published: string,
      summary: string,
      content: string
    },
  },
  requestArtistInfo: any;

  };

class ArtistInfo extends React.Component<ArtistInfoProps> {
  results = [];
  componentDidMount() {
    this.props.requestArtistInfo();

  }

  similarArtistsMap = (artist,i) =>
    <div key={i} id="similar-artist-container">
        <div className="similar-artist-image">
          <img src={artist.image !== undefined ? artist.image[3]["#text"] : ''} alt="Similar artist"  />
          </div>
      <div className="similar-artist-name">
        <a href={artist.url}>
        <span >
           {artist.name}
        </span>
        </a>
      </div>
    </div>

  tagMAp = (tag, i) =>
    <span key={i} id="tagmap">
      <a href={tag.url}>#{tag.name} </a>
    </span>;

  render() {
    const artistResult = this.props;
    return (
      artistResult.data !== undefined ?
    <div className="Artist-Info-component">
      <h4>
        {artistResult.data.name}
          </h4>
          <div className="info-container">
            <div className="master">
              <p className="artist-bio text-justify" dangerouslySetInnerHTML={{ __html: artistResult.data.bio !== undefined ? artistResult.data.bio.summary : '' }}>
            </p>
            </div>
            <div className="details">
              <img src={artistResult.data.image !== undefined ? artistResult.data.image[3]["#text"] : ''} alt="Lil' Wayne" className="avatar" />
             <div id="listen-badge">
              <a href="https://geo.itunes.apple.com/us/artist/lil-wayne/5869117?mt=1&app=music">
                <img src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?kind=artist&bubble=apple_music" alt="Listen Lil Wayne on iTunes badge">
                </img>
                </a>
                </div>
              <div className="tags-container" >
                {artistResult.data.tags !== undefined ?
                  artistResult.data.tags.tag.map(this.tagMAp) : ''}
              </div>
              <hr></hr>
              <div className="similar-artists">
                {artistResult.data.similar !== undefined ?
                  artistResult.data.similar.artist.map(this.similarArtistsMap) : ''}
              </div>
            </div>
        </div>
        </div> :
        <div><h3>loading artist info...</h3></div>
    )

  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestArtistInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);