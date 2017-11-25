// @flow
import * as React from 'react';

type Props = {};

class App extends React.Component<Props, null> {
  componentDidMount() {
    fetch('/api') // eslint-disable-line no-undef
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
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
        </section>
      </main>
    );
  }
}

export default App;
