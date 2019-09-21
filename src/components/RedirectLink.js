import React from 'react';
import {useSelector} from 'react-redux'


const RedirectLink = () => {
  const {session} = useSelector(state => state);
  if (session !== undefined && session.success) {
    return (
      <div className="redirect--screen">
        <p className="h4">Hey, You must authorize the app!</p>
        <p>
          Click the button bellow to access the themoviedb.org and authorize this app.
        </p>
        <div>
          <a href={`https://www.themoviedb.org/authenticate/${session.request_token}?redirect_to=http://localhost:3000`}  target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary">Access themoviedb</button>
          </a>
          </div>
      </div>
    );
  } else {
    return (
      <h2>Loading ...</h2>
    )
  }

}

export default RedirectLink;
