import React from 'react';
import { Container } from 'native-base';
import Video from 'react-native-video';
import MusicControl from 'react-native-music-control';
import images from '~/assets/images';

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playing: true
    };
  }

  componentDidMount() {
    // Basic Controls
    MusicControl.enableControl('play', true);
    MusicControl.enableControl('pause', true);
    MusicControl.enableControl('stop', false);
    MusicControl.enableControl('nextTrack', true);
    MusicControl.enableControl('previousTrack', false);

    // Later to trigger fullscreen
    this.player.presentFullscreenPlayer();
    // To set video position in seconds (seek)
    this.player.seek(0);

    MusicControl.enableBackgroundMode(true);

    //play
    MusicControl.on('play', () => {
      this.playRemoteControl();
    });
    //pause
    MusicControl.on('pause', () => {
      this.pauseRemoteControl();
    });
    //stop
    MusicControl.on('stop', () => {
      this.stopRemoteControl();
    });
  }

  onLoad() {
    console.log('load');
    MusicControl.setNowPlaying({
      title: 'Billie Jean',
      artwork: 'https://i.imgur.com/e1cpwdo.png', // URL or RN's image require()
      artist: 'Michael Jackson',
      album: 'Thriller',
      genre: 'Post-disco, Rhythm and Blues, Funk, Dance-pop',
      duration: 294, // (Seconds)
      description: '', // Android Only
      color: 0xffffff, // Notification Color - Android Only
      date: '1983-01-02T00:00:00Z', // Release Date (RFC 3339) - Android Only
      rating: 84, // Android Only (Boolean or Number depending on the type)
      notificationIcon: 'my_custom_icon' // Android Only (String), Android Drawable resource name for a custom notification icon
    });
  }

  pauseRemoteControl() {
    console.log('pause');
  }

  playRemoteControl() {
    console.log('play');
  }

  stopRemoteControl() {
    console.log('stop');
  }

  render() {
    return (
      <Container>
        <Video
          source={{
            uri: 'http://43.239.223.139/audio//book/3365/BenNhauTronDoi-chapter-3365.mp3'
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          // rate={1.0} // 0 is paused, 1 is normal.
          // volume={1.0} // 0 is muted, 1 is normal.
          // muted // Mutes the audio entirely.
          // paused // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.*
          repeat // Repeat forever.
          playInBackground // Audio continues to play when app entering background.
          playWhenInactive // [iOS] Video continues to play when control or notification center are shown.
          ignoreSilentSwitch={'ignore'} // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
          progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
          // onLoadStart={this.onLoad()} // Callback when video starts to load
          onLoad={this.onLoad()} // Callback when video loads
          // onProgress={this.setTime} // Callback every ~250ms with currentTime
          // onEnd={this.onEnd} // Callback when playback finishes
          // onError={this.videoError} // Callback when video cannot be loaded
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          // onTimedMetadata={this.onTimedMetadata} // Callback when the stream receive some metadata
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
        />
      </Container>
    );
  }
}
