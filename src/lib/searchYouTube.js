var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      console.log('MURKD IT');
      console.log(data);
      // data.items.map(item => {
      //   callback(item);
      // });
      return callback(data.items);
    },
    error: function(error) {
      console.log(error);
    }
  });
};

window.searchYouTube = searchYouTube;
