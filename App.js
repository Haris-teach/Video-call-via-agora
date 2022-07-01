import React from 'react';
import {Provider} from 'react-redux';
import Stack from './src/navigations/StackNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/index';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack />
       
      </PersistGate>
    </Provider>
  );
};



export default App;
