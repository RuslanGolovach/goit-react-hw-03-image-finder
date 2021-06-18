import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const PreLoader = () => {
  return (
    <div className={styles.Backdrop}>
      <div className={styles.Loader}>
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    </div>
  );
};

export default PreLoader;
