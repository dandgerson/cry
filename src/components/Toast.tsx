import React, { useEffect } from 'react';
import styled from 'styled-components';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeToast } from '../store/slices/uiSlice';

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToastItem = styled.div<{ type: 'success' | 'error' | 'info' }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--background-color);
  color: var(--text-color);
  border-left: 4px solid ${({ type }) => 
    type === 'success' ? '#4caf50' : 
    type === 'error' ? '#f44336' : '#1d9bf0'
  };
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  animation: slideIn 0.3s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const ToastIcon = styled.div<{ type: 'success' | 'error' | 'info' }>`
  margin-right: 12px;
  color: ${({ type }) => 
    type === 'success' ? '#4caf50' : 
    type === 'error' ? '#f44336' : '#1d9bf0'
  };
`;

const ToastMessage = styled.div`
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--secondary-text-color);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  
  &:hover {
    color: var(--text-color);
  }
`;

const Toast: React.FC = () => {
  const { toasts } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();
  
  const handleClose = (id: string) => {
    dispatch(removeToast(id));
  };
  
  const getIcon = (type: 'success' | 'error' | 'info') => {
    switch (type) {
      case 'success':
        return <CheckCircle size={18} />;
      case 'error':
        return <AlertCircle size={18} />;
      case 'info':
        return <Info size={18} />;
    }
  };
  
  return (
    <ToastContainer>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} type={toast.type}>
          <ToastIcon type={toast.type}>
            {getIcon(toast.type)}
          </ToastIcon>
          <ToastMessage>{toast.message}</ToastMessage>
          <CloseButton onClick={() => handleClose(toast.id)}>
            <X size={16} />
          </CloseButton>
        </ToastItem>
      ))}
    </ToastContainer>
  );
};

export default Toast;