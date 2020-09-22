import React from 'react';
import ReactDOM from 'react-dom';
import Season from './screens/Season/Season';
import Spinner from './screens/Spinner/Spinner';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <Season lat={this.state.lat} />;
    }

    return <Spinner message='Please accept location request' />;
  }

  render() {
    return <div className='container'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
