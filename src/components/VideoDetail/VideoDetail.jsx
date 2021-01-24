import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onRender = () => {
    const { selectedVideo } = this.props;
    if (!selectedVideo) {
      return (
        <div className="ui segment">
          <div>Loading...</div>
        </div>
      );
    }
    return (
      <div>
        <div className="ui embed">
          <iframe
            title="video player"
            src={`https://youtube.com/embed/${selectedVideo.id.videoId}`}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{selectedVideo.snippet.title}</h4>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.onRender()}</div>;
  }
}

const youtubeShape = {
  kind: PropTypes.string,
  etag: PropTypes.string,
  id: PropTypes.object,
  snippet: PropTypes.object,
};

VideoDetail.propTypes = {
  selectedVideo: PropTypes.shape(youtubeShape),
};

VideoDetail.defaultProps = {
  selectedVideo: null,
};

export default VideoDetail;
