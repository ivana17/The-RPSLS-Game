import { ReactNode, useState } from 'react';
import './Header.css';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div className='header'>
      <button
        className='rules-button'
        onMouseEnter={() => setModalVisible(true)}
        onMouseLeave={() => setModalVisible(false)}
      >
        Rules
      </button>
      {isModalVisible && (
        <div className='info-modal'>
          <img src='/rules.png' alt='RULES' className='modal-image' />
        </div>
      )}
      {children}
    </div>
  );
};

export default Header;
