import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';
import Layout from './layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
