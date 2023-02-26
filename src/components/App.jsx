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
        top: (list.scrollTop = list.scrollHeight - snapshot + 90),
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

    return (
      <AppBox>
        <Searchbar onSubmit={this.handleSubmit} />
        <section ref={this.listRef}>
          {Boolean(gallery.length) && (
            <ImageGallery gallery={gallery}>
              {loading && <Loader />}
              {Boolean(gallery.length) && gallery.length !== totalHits && (
                <Button onBtnClick={this.handleLoadMore} />
              )}
            </ImageGallery>
          )}
        </section>
      </AppBox>
    );
  }
}
