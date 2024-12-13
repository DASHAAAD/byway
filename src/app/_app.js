"use client";
import { Provider } from 'react-redux';
import { store } from './store';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
    const router = useRouter();
  
    const navigate = () => {
      router.push('/new-route');
    };
    const store = createStore(rootReducer);
    return (
      <Provider store={store}>
       
        <Component {...pageProps} navigate={navigate} />
       
      </Provider>
    );
  }
  
  export default MyApp;
  