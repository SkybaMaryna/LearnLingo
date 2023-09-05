import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { persistor, store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { BASENAME } from 'constants';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={BASENAME}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <ToastContainer autoClose={2500} />
  </React.StrictMode>
);
