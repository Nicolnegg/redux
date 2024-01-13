import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Footer.module.css';
import { RootState } from '../../app/store';
import { toggleContact } from './footerSlice';


const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const showContact = useSelector((state: RootState) => state.footer.showContact);

  return (
    <footer className={styles.footer}> 
      <div className={styles['footer-content']}>
        <div className={styles['footer-section']}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#" onClick={() => dispatch(toggleContact())}>Contacto</a></li>
          </ul>
        </div>
        {showContact && (
          <div className={styles['footer-section']}>
            <h3>Contacto</h3>
            <p>Correo: contacto@example.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
        )}
      </div>
      <div className={styles['footer-bottom']}>
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export {Footer};
