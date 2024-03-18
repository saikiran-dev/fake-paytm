import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Validation';
import Layout from './Layout';

function App() {
  return (
    <>
      <h1 className='text-2xl font-semibold my-4 pb-4 border-b-2'>
        Payments App
      </h1>
      <Routes>
        <Route
          path='/'
          exact
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
