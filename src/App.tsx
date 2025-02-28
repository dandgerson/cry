import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContainer, MainSection } from './components/styled';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import { ThemeProvider } from './context/ThemeContext';
import Toast from './components/Toast';
import { useAuth } from './hooks/useAuth';

function App() {
  // Initialize authentication
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider>
      <Router>
        <AppContainer>
          <Sidebar />
          
          <MainSection>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </MainSection>
          
          <RightSidebar />
          <BottomNav />
        </AppContainer>
        <Toast />
      </Router>
    </ThemeProvider>
  );
}

export default App;