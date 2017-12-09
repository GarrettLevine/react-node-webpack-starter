// @flow
import * as React from 'react';

type Props = {};

type State = {
  message: string,
};

type Resp = {
  message: string,
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    fetch('/api') // eslint-disable-line no-undef
      .then(resp => resp.json())
      .then((data: Resp) => {
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
              <h1 className="title">Geat TITLE</h1>
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
