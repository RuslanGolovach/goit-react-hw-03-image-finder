import React, { Component } from 'react';
import styles from './App.module.css';
import imagesApi from './services/imagesApi';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import PreLoader from './components/Loader';
import Modal from './components/Modal';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    currentPictures: '',
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({ isLoading: true });
    imagesApi
      .fetchImagesApi(searchQuery, page)
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));

        if (this.state.images.length > 12) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  onImgClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({
      currentPictures: e.target.dataset.img,
    });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, showModal, currentPictures } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} onImgClick={this.onImgClick} />
        {images.length > 0 && !isLoading && (
          <Button
            onClick={this.fetchImages}
            text={isLoading ? 'Loading...' : 'Load more'}
          />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={currentPictures} alt="#" />
          </Modal>
        )}
        {isLoading && <PreLoader />}
      </div>
    );
  }
}

export default App;
