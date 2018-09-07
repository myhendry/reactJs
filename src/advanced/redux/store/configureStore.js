import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import { firebaseApp } from "../../../modules/firebase/firebase";
import firebase from "../../../modules/firebase/firebase";
import rootReducer from "../reducers";

// Refer to App.js for wrapping of App component

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

export const configureStore = preloadedState => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = compose(
    ...storeEnhancers,
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};
