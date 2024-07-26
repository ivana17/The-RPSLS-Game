import { ReactNode, useState } from 'react';
import './Header.css';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleMouseEnter = () => {
    console.log('Mouse Enter');
    setModalVisible(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse Leave');
    setModalVisible(false);
  };

  return (
    <div className='header'>
      <button
        className='rules-button'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
