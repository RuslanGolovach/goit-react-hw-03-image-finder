import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt=""
      className={styles.ImageGalleryItem_image}
      data-img={largeImageURL}
    />
  </li>
);

export default ImageGalleryItem;
