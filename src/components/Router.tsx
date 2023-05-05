import { Routes, Route } from 'react-router-dom';
import App from '../pages/App';

const Router = () => {
  return (
    <>
        <Routes>
        <Route index path='/' element={<App />} />
      </Routes>
    </>
  );
}

export default Router;
