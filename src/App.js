import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp";

// Auth
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setUser(userAuth); // equivalent to null if !userAuth
    });

    console.log(user);

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
