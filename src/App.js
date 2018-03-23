import React, {Component} from 'react';

import './App.css';
import * as Analytics from './analytics';

const GiphyRandom = require('giphy-random');

const giphyRandom = new GiphyRandom({
  apiKey: '0iV8jRoT79fzzgjRrkdAueX7Md2hl6fD',
  rating: 'Y'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureUrl: null,
      init: true,
      numberOfGifsInSession: 0
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
              Analytics.showCuteGif(this.state.numberOfGifsInSession + 1);
              this.setState({pictureUrl: null}, () => {
                giphyRandom.get({tag: 'cute baby animal'}).then(data => {
                  this.setState({
                    pictureUrl: data.fixed_width_downsampled_url,
                    init: false,
                    numberOfGifsInSession: this.state.numberOfGifsInSession + 1
                  });
                });
              });
            }}
          >
            Gimme Cutestuff
          </button>
        </div>
        {this.state.pictureUrl ? (
          <img height="300px" src={this.state.pictureUrl} alt="cutestuff" />
        ) : (
          !this.state.init && <div className="Loading">Loading...</div>
        )}
      </div>
    );
  }
}

export default App;
