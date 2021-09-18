import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videoes,onVideoSelect}) => {
    const RenderList =  videoes.map((video) => {
        return <VideoItem key={video.id.videoId }onVideoSelect= {onVideoSelect} video= {video} />;
    });
    
    return <div className="ui relaxed divided list">{RenderList}</div>;
        
};

export default VideoList;