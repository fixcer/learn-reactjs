import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  images = () => {
    return this.props.images.map((image) => {
      return <ImageCard image={image} key={image.id} />;
    });
  };

  render() {
    return <div className='image-list'>{this.images()}</div>;
  }
}

// const ImageList = (props) => {
//   const images = props.images.map((image) => {
//     return <ImageCard key={image.id} image={image} />;
//   });
//   return <div className='image-list'>{images}</div>;
// };

export default ImageList;
