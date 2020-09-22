import React from 'react';

export default class VideoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { video } = this.props;

    if (!video) {
      return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
        <div className='ui embed'>
          <iframe src={videoSrc} title={video.snippet.title} />
        </div>
        <div className='ui segment'>
          <h4 className='ui header'>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
