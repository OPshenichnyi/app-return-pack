import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout';
import { ClientList } from './components/Client/ClientList';
import { ProductList } from './components/Product/ProductList';
import { OrderList } from './components/Order/OrderList';
import { PackList } from './components/Pack/PackList';
import { CompletedOrder } from './components/CompletedOperation/CompletedOrder';

function App() {
  

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route path='client' element={<ClientList></ClientList>}></Route>
            <Route path='product' element={<ProductList></ProductList>}></Route>
            <Route path='pack' element={<PackList></PackList>}></Route>
            <Route path='order' element={<OrderList></OrderList>}></Route>
            <Route path='completed' element={<CompletedOrder></CompletedOrder>}></Route>
          </Route>
        </Routes>  
</div>
    </>
  )
}

export default App
