import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = (props) => {
  const { videos, onVideoSelect } = props;

  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
      })}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;
