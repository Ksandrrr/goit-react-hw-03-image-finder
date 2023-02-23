import React, { Component } from 'react';
import Loader from './Loader/Loader.jsx';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from "./Button/Button"
import axios from 'axios';
import Modal from "./Modal/Modal"
export class App extends Component {
  state = {
    search: '',
    page: 1,
    items: [],
    loading: false,
    modal: false,
    photoModal: ``,
  };
  async fetchPosts() {
    try {
      this.setState({ loading: true });
      const apiKey = '33025526-c7f8a1e0e4b08b9a5d2f6635c';
      const { search, page} = this.state;
      const perPage = 12;
      const response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${perPage}&page=${page}`
      );
      this.setState(({ items }) => ({
        items: [...items, ...response.data.hits],
      }));
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  }
    updateSearch = ({ search }) => {
    this.setState({ search, items: [], page: 1 }, () => {
      this.fetchPosts();
    });
  };
  loadMore = () => {
  this.setState(
    ({ page }) => ({
      page: page + 1,
    }),
    () => {
      this.fetchPosts();
    }
  );
  };
  openModal = (largeImageURL) => {
    this.setState(prevState => ({
    photoModal: largeImageURL,
    modal: !prevState.modal,
  }));
  }
  render() {
    const { items,loading, modal,photoModal } = this.state;
    return (
      <>
        <header className="searchbar">
          <SearchBar updateSearch={this.updateSearch} />
        </header>
        {loading && <Loader />}
        <ImageGallery>
          {items.length > 0 && <ImageGalleryItem item={this.state.items}  openModal={this.openModal}/>}
        </ImageGallery>
        {items.length > 0 && <Button loadMore={this.loadMore} />}
        {modal && <Modal openModal={this.openModal} photoModal={photoModal} />}
      </>
    );
  }
}
