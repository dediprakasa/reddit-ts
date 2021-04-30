import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Provider, createClient, dedupExchange, fetchExchange } from "urql";
import { ellipse, square, triangle } from "ionicons/icons";
import { cacheExchange, QueryInput, Cache } from "@urql/exchange-graphcache";
import {
  MeDocument,
  MeQuery,
  LoginMutation,
  RegisterMutation,
} from "./generated/graphql";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Register from "./pages/Register";
import Tabs from "./Tabs";
import Login from "./pages/Login";

function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              }
            );
          },

          register: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.register.errors) {
                  return query;
                } else {
                  return {
                    me: result.register.user,
                  };
                }
              }
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});

const App: React.FC = () => (
  <Provider value={client}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/register">
            <Redirect to="/main/tab3" />
          </Route>
          <Route path="/login">
            <Redirect to="/main/tab3" />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/main/tab1" />
          </Route>
        </IonRouterOutlet>
        <Route path="/main">
          <Tabs />
        </Route>
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;
