import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Page1 from '@/pages/page1';
import Page2 from '@/pages/page2';
import Page3 from '@/pages/page3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/page1" replace />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
