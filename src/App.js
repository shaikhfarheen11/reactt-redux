import { useSelector } from 'react-redux';
import Cart from './Compo/Cart/Cart';
import Layout from './Compo/Layout/Layout';
import Products from './Compo/Shop/Product';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;