import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from './headerSlice';
import { RootState } from '../../app/store';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.header.title);

  const handleTitleClick = () => {
    dispatch(setTitle('Nuevo Título'));
  };

  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.headertitle} onClick={handleTitleClick}>
          CONECTATE
        </div>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.button}>Perfil</button>
        <button className={styles.button} onClick={() => console.log('Ir a página de login')}>
          Login
        </button>
        <button className={styles.button}>Explorar</button>
      </div>
    </div>
  );
};

export { Header };
