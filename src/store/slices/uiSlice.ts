import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface UiState {
  toasts: ToastMessage[];
  isComposerOpen: boolean;
}

const initialState: UiState = {
  toasts: [],
  isComposerOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Omit<ToastMessage, 'id'>>) => {
      const id = Date.now().toString();
      state.toasts.push({
        id,
        ...action.payload,
      });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
    },
    setComposerOpen: (state, action: PayloadAction<boolean>) => {
      state.isComposerOpen = action.payload;
    },
  },
});

export const { addToast, removeToast, setComposerOpen } = uiSlice.actions;

export default uiSlice.reducer;