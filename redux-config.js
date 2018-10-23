const redux = require("redux");
const createStore = redux.createStore;

// Reducer
const rootReducer = (state, action) => {
  console.log({ state, action });
  if (action.type === "ADD_BOX") {
  }
  return { state };
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log(["SUBSCRIPTION"], store.getState());
});
