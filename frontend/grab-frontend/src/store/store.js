


// store/store.js

import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;





/*import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;*/






