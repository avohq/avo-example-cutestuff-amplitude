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
      isLoading: false,
      gifCounter: 0
    };
  }

  renderGif() {
    if (this.state.isLoading) {
      return (
        <div style={{padding: 50, fontWeight: 700, color: '#DDD'}}>
          Loading...
        </div>
      );
    } else if (this.state.pictureUrl != null) {
      return <img src={this.state.pictureUrl} height="200px" alt="cutestuff" />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">Cutestuff at Giphy</h1>
        <div className="Counter">
          <button
            className="Button"
            onClick={() => {
              this.setState({pictureUrl: null, isLoading: true}, () => {
                giphyRandom.get({tag: 'cute baby animal'}).then(data => {
                  let gifUrl = data.fixed_width_downsampled_url;
                  this.setState(
                    {
                      isLoading: false,
                      pictureUrl: gifUrl,
                      gifCounter: this.state.gifCounter + 1
                    },
                    () => Analytics.gimmeCutestuff(gifUrl)
                  );
                });
              });
            }}
          >
            Gimme Cutestuff
          </button>
        </div>
        {this.renderGif()}
      </div>
    );
  }
}

export default App;
