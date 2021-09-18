import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './videoDetails';
import useVideos from '../hooks/useVideos';

const App = () =>{

 const[selectedVideo,setSelectedVideo]= useState(null);
    const [videos,search] = useVideos('DC motors');
    
    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);
 
// const onVideoSelect = (video) => {
  //  setSelectedVideo(video);
//}
return (
        <div className="ui container">
    
                <SearchBar onFormSubmit={search}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList
                             //onVideoSelect = {(video) =>setSelectedVideo(video)} similar to below line
                             onVideoSelect={setSelectedVideo}
                             videoes={videos} />
                        </div>
                    </div>
                </div>
            </div>
);
}

export default App;
//https://hooksvideoyoutube.vercel.app/ watch this site i deployed here my application in verecl deploy provider.

// deploy in netlify
//create a repo in github copy link go to project terminal type  git add. then git commit -m "ready for deployment"
//then type git remote add origin (paste that repo link here)
// type git push origin master

//go to netlify n log in with github then click on new site from git then click on github
//install netlify