import { pixabay } from 'api/pixabay-api';
import { Component } from 'react';

export class App extends Component {
  state = {
    gallery: [],
    searchName: '',
  };
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return <div></div>;
  }
}
pixabay
  .fetchGallery(2, 'dog')
  .then(data => console.log(data))
  .catch(error => console.log(error));
