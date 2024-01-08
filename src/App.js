import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./Compo/Counter";
import Header from "./Compo/Header";
import Auth from "./Compo/Auth";
import UserProfile from "./Compo/UserProfile";

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
    <Counter />
    </Fragment>
  );
}
export default App;