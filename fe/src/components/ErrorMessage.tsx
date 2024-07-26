import { ReactNode } from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  children: ReactNode;
  visible: boolean;
}

const ErrorMessage = ({ children, visible }: ErrorMessageProps) => {
  return (
    <div className={`error-popup ${!visible ? 'hide' : ''}`}>{children}</div>
  );
};

export default ErrorMessage;
