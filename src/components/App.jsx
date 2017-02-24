class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      nextVideo: window.exampleVideoData[0]
    };
  }


  onVideoEntryClick (clickedVideo) {
    this.setState({
      nextVideo: clickedVideo
    });
  }

  searchYouTubeVideos (query) {
    let options = {
      key: this.props.API_KEY,
      query: query
    };
    { console.log('search youtube function', this.props.searchYouTube); }

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videoList: videos,
        nextVideo: videos[0]
      });
    });
  }

  render () {


    return (
      <div>
        <Nav 
        searchInput= {_.debounce(this.searchYouTubeVideos.bind(this), 1000)}
        />
        <div className="col-md-7">
          <VideoPlayer video={this.state.nextVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} click={this.onVideoEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }
}  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
