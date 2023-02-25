import React, { Component } from 'react';
import Loader from './Loader/Loader.jsx';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchPost from '../shared/api';
import Modal from './Modal/Modal';
export class App extends Component {
  state = {
    search: '',
    page: 1,
    items: [],
    loading: false,
    modal: false,
    photoModal: ``,
    loadMore: true,
    notFound: false,
    hasMore: true,
  };

  async fetchPosts() {
    const { search, page } = this.state;
    try {
      this.setState({ loading: true, notFound: false });

      const response = await fetchPost(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...response],
        notFound: response.length === 0,
      }));
      if (response.length < page) {
        this.setState({ hasMore: false });
      }
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  }
  updateSearch = ({ search }) => {
    if (this.state.search === search) {
      return;
    }
    this.setState({ search, items: [], page: 1 });
  };
  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.fetchPosts();
    }
  }
  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };
  openModal = largeImageURL => {
    this.setState(prevState => ({
      photoModal: largeImageURL,
      modal: !prevState.modal,
    }));
  };
  render() {
    const { items, loading, modal, photoModal, notFound, hasMore } = this.state;
    return (
      <>
        <header className="searchbar">
          <SearchBar updateSearch={this.updateSearch} />
        </header>
        {loading && <Loader />}
        {notFound && <h2>No results found</h2>}
        {items.length > 0 && (
          <ImageGallery item={this.state.items} openModal={this.openModal} />
        )}
        {hasMore && items.length > 0 && <Button loadMore={this.loadMore} />}
        {modal && <Modal openModal={this.openModal} photoModal={photoModal} />}
      </>
    );
  }
}
