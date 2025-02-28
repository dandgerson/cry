import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToast, removeToast } from '../store/slices/uiSlice';

export const useToast = () => {
  const dispatch = useDispatch();
  
  const showToast = useCallback(
    (message: string, type: 'success' | 'error' | 'info' = 'info') => {
      const toastId = dispatch(addToast({ message, type })).payload.id;
      
      // Auto-remove toast after 3 seconds
      setTimeout(() => {
        dispatch(removeToast(toastId));
      }, 3000);
    },
    [dispatch]
  );
  
  return { showToast };
};