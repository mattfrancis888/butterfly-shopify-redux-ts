import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// function userLoggedInFetch(app) {
//     //@ts-ignore
//     const fetchFunction = authenticatedFetch(app);

//     //@ts-ignore
//     return async (uri, options) => {
//         console.log("URI", uri);
//         const response = await fetchFunction(uri, options);

//         if (
//             response.headers.get(
//                 "X-Shopify-API-Request-Failure-Reauthorize"
//             ) === "1"
//         ) {
//             const authUrlHeader = response.headers.get(
//                 "X-Shopify-API-Request-Failure-Reauthorize-Url"
//             );

//             // const redirect = Redirect.create(app);
//             //@ts-ignore
//             redirect.dispatch(Redirect.Action.APP, authUrlHeader || `/auth`);
//             return null;
//         }

//         return response;
//     };
// }

const client = new ApolloClient({
    // fetch: authenticatedFetch(app),

    // fetch: userLoggedInFetch(app),

    fetchOptions: {
        credentials: "include",
    },
    uri: process.env.SHOPIFY_APP_URL,
});
ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <AppProvider i18n={translations}>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

