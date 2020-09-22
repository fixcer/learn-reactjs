import React from 'react';
import VideoItem from './VideoItem';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  videos = () => {
    return this.props.videos.map((video) => {
      return (
        <VideoItem
          onVideoSelect={this.props.onVideoSelect}
          video={video}
          key={video.id.videoId}
        />
      );
    });
  };

  render() {
    return <div className='ui relaxed divided list'>{this.videos()}</div>;
  }
}
