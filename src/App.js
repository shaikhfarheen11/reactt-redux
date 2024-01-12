import { useSelector, useDispatch } from 'react-redux';
import Cart from './Compo/Cart/Cart';
import Layout from './Compo/Layout/Layout';
import Products from './Compo/Shop/Product';
import { Fragment, useEffect } from 'react';
// import { uiActions } from './store/ui-slice';
import Notification from './Compo/UI/Notification';
import { sendCartData, fetchCartData } from './store/cartActions';

let isInitial = true; 

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  

useEffect(() => {
  if(isInitial) {
    isInitial = false;
    return;
  }
  dispatch(sendCartData(cart));
}, [cart, dispatch])

  return (
    <Fragment>
    {notification && (
    <Notification 
    status={notification.status}
    title={notification.title}
    message={notification.message}
    />
    )}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
   
    </Fragment>
  );
}

export default App;