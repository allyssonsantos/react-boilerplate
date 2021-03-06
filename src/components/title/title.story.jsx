import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Title from '.';

const stories = storiesOf('Title', module);

stories.add('without props', () => (
  <Title>Main title</Title>
));

stories.add('Title with async/await', () => {
  class App extends Component {
    constructor() {
      super();
      this.state = {
        title: '...',
      };
    }


    async componentDidMount() {
      this.setState({
        title: await this.getTitle(),
      });
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    getTitle() {
      return new Promise((resolve) => {
        this.timer = setTimeout(() => {
          resolve('My app with async / await!');
        }, 2000);
      });
    }

    render() {
      const { title } = this.state;
      return (
        <div>
          <Title>{title}</Title>
        </div>
      );
    }
  }

  return <App />;
});
