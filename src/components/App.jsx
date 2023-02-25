import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { pixabay } from 'api/pixabay-api';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { AppBox } from './App.styled';

export class App extends Component {
  state = {
    gallery: [],
    search: '',
    page: 1,
    loading: false,
    totalHits: 0,
  };
  listRef = React.createRef();
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.gallery.length < this.state.gallery.length) {
      const list = this.listRef.current;
      console.log(list);
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { page, search } = this.state;

    if ((page !== prevState.page || search) !== prevState.search) {
      this.setState({ loading: true });

      pixabay
        .fetchGallery(page, search)
        .then(({ hits, totalHits }) =>
          this.setState(prevState => {
            console.log(totalHits);
            return {
              gallery: [...prevState.gallery, ...hits],
              totalHits,
            };
          })
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
    if (snapshot !== null) {
      const list = this.listRef.current;

      window.scrollBy({
        top: (list.scrollTop = list.scrollHeight - snapshot),
        behavior: 'smooth',
      });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = values =>
    this.setState({ page: 1, search: values.search, gallery: [] });

  render() {
    const { gallery, loading, totalHits } = this.state;
    console.log(gallery.length);
    return (
      <AppBox>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <div ref={this.listRef}>
          <ImageGallery gallery={gallery} />
        </div>

        {Boolean(gallery.length) && gallery.length !== totalHits && (
          <Button onBtnClick={this.handleLoadMore} />
        )}
      </AppBox>
    );
  }
}
