class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextVideo: window.exampleVideoData[0]
    };
  }


  onVideoEntryClick (clickedVideo) {
    this.setState({
      nextVideo: clickedVideo
    });
  }

  render () {


    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.nextVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={props.results} click={this.onVideoEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }
}  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
