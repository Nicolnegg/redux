import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDescription } from './titleSlice';
import styles from './Title.module.css';
import { RootState } from '../../app/store';

const Title: React.FC = () => {
  const dispatch = useDispatch();
  const description = useSelector((state: RootState) => state.title.description);

  return (
    <div>
        <div className={styles.titleContainer}>
        <div className={styles.waveContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 50 1300 300">
            <path stroke="none" stroke-width="0" fill="#3498db" fill-opacity="1" d="M0,224C0,224,120,224,240,192C360,160,480,96,600,64C720,32,840,64,960,96C1080,128,1200,224,1320,256C1380,272,1440,224,1440,224L1440,0L0,0Z"></path>

            </svg>
        </div>
        </div>
        <div className={styles.descriptiontitle} >
            {description}
        </div>
    </div>
    
  );
};

export {Title};