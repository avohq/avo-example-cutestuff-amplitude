import React, {Component} from 'react';

import './App.css';
import * as Analytics from './analytics';

const GiphyRandom = require('giphy-random');

const giphyRandom = new GiphyRandom({ apiKey: '0iV8jRoT79fzzgjRrkdAueX7Md2hl6fD' });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureUrl: null
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">Cutestuff at Giphy</h1>
        <div className="Counter">
          <button
            className="Button"
            onClick={() => {
              Analytics.showCuteGif('Kitten');
              this.setState({pictureUrl: null}, () => {
                giphyRandom.get({ tag: 'kitten' }).then(data => {
                  this.setState({pictureUrl: data.fixed_width_downsampled_url});
                })
              });
            }}
          >
            Kitten
          </button>
          <button
            className="Button"
            onClick={() => {
              Analytics.showCuteGif('Puppe');
              this.setState({pictureUrl: null}, () => {
                giphyRandom.get({ tag: 'puppy' }).then(data => {
                  this.setState({pictureUrl: data.fixed_width_downsampled_url});
                })
              });
            }}
          >
            Puppy
          </button>
        </div>
        {this.state.pictureUrl ? <img src={this.state.pictureUrl} alt="cutestuff" /> : null}
        <div className="Links">
          <a
            href="https://preview.avo.sh/?avo=PTAEHEFMDtIJwIYBdIBNQCMCeoCCA3Ae1H3gGcBLQ6UABgDoBGAGlAAUAZAUVwGUvQXACIBJACqgA6uIASoAMK4ASlwBQqpFgAOkUGSRwK0AObrNO0EaRntugGYAbQshsWMhQg-Va4hHXE1QACIAeQd0ADUEBwBXSCDVUFBUSDIAY0MtJCoaIPlCGOgUOBJouMxIO0I4XQwYpCRqUAB3BDJQNIcKNIBrNASk810rb19-QKCAOUhm0CjY+MTk1IyKLJzg-MLi0oXQBDsduoam1vbO7r7UAdAhyyL1SFIizYKi+FARaAzIAFsYJA3FLpTLZJpBSQACxgoBiZA+F167SQ0L0MQwBgQaSQmHqjWgCSWPj88AmYUiZUWSWJ4xwUxmc0phKeANe2w+QkgP3+RSBK1BGwh0JocIRXSRt1RCFQ6GO+MJ1LGpLp5MZCxuNOVwWms3mcQSQA"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Event Schema
          </a>
          {' | '}
          <a
            href="https://github.com/avohq/avo-example-web-counter"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
    );
  }
}

export default App;
