import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Assemble My Gurls
                            </h1>
                            <h2 className="subtitle">
                                Make your Dream Drag Race Team
                            </h2>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;
