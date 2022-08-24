import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, search] = useVideos("pewdiepie");

  useEffect(() => {
    setSelectedVideo(videoList[0]);
  }, [videoList]);

  return (
    <div className="ui container" style={{ paddingTop: "16px" }}>
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videoList={videoList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// export default class App extends React.Component {
//   state = { videoList: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit("funny videos");
//   }

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   onTermSubmit = async (term) => {
//     const result = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({
//       videoList: result.data.items,
//       selectedVideo: result.data.items[0],
//     });
//   };

//   render() {
//     return (
//       <div className="ui container" style={{ paddingTop: "16px" }}>
//         <SearchBar onTermSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videoList={this.state.videoList}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
