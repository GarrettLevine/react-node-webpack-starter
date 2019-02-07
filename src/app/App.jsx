
import * as React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    fetch('/api') // eslint-disable-line no-undef
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          message: data.message,
        });
      });
  }

  render() {
    return (
      <main>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Great TITLE</h1>
              <h2 className="subtitle">great subtitle</h2>
            </div>
          </div>
          <span>{this.state.message}</span>
        </section>
      </main>
    );
  }
}

export default App;
