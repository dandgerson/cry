import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCredentials, setLoading } from '../store/slices/authSlice';
import { useGetUserQuery } from '../store/api/apiSlice';

// This hook handles authentication logic
export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  
  // For demo purposes, we'll use user ID 1 as the current user
  const currentUserId = '1';
  const { data: user, isLoading } = useGetUserQuery(currentUserId);
  
  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else if (user) {
      dispatch(setCredentials(user));
    }
  }, [user, isLoading, dispatch]);
  
  return auth;
};