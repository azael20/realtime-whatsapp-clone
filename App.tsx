import 'react-native-gesture-handler';
import { RootNavigator } from './src/navigator/rootNavigator';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
