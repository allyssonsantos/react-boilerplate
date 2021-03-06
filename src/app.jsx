import React, { Component } from 'react';

class App extends Component {
  static getTitle() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('My app with async / await!');
      }, 2000);
    });
  }

  constructor() {
    super();
    this.state = {
      title: '...',
      Component: 'div',
    };
  }


  async componentDidMount() {
    const title = await import('components/title');

    this.setState({
      title: await App.getTitle(),
      Component: title.default,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <this.state.Component>
          {title}
        </this.state.Component>
      </div>
    );
  }
}

export default App;
