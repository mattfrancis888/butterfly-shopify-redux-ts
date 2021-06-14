import { createStore, applyMiddleware, combineReducers } from "redux";
import { shopifyReducer } from "./shopify/reducers";
import { cartUIReducer } from "./cartUI/reducers";
import { variantsReducer } from "./variants/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
const rootReducer = combineReducers({
    shopify: shopifyReducer,
    cartUI: cartUIReducer,
    variants: variantsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
);
