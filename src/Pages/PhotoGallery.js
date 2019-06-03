import React from 'react';
import Gallery from '../component/Gallery';

class PhotoGallery extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <Gallery/>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
