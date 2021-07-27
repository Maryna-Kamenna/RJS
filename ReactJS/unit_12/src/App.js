import './App.css';
import GoodsList from './containers/GoodsList';
import CartList from './containers/CartList';


function App() {
  return (
    <>
      <div>
        {/* {Вывод даных из хранилища}  первый компонент выводит товары, второй корзину*/  }  
        <GoodsList /> 
        <CartList />    
      </div>
    </>
  );
}

export default App;
