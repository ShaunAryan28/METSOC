window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
      width: '800px',
      height: '600px',

    uri: 'https://open.spotify.com/playlist/3e8kWcCuI1IpIFU4SxaFx6?si=43a15e480ea54c82'
    };
    const callback = (EmbedController) => {
      document.querySelectorAll('.episode').forEach(
        episode => {
          episode.addEventListener('click', () => {
            EmbedController.loadUri(episode.dataset.spotifyId)
          });
        })
    };
    IFrameAPI.createController(element, options, callback);
  };  
