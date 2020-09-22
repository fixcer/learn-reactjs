import React from 'react';
import './style.css';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { video } = this.props;
    return (
      <div
        onClick={() => this.props.onVideoSelect(video)}
        className='video-item item'
      >
        <img
          className='ui image'
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className='content'>
          <div className='header'>{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
