import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';
import { useAuth } from '../hooks/useAuth';
import RegisterPage from './RegisterPage';
// Вытаскиываем необходимые пропсы
function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchinput,
  onAddToFavorite,
  onAddtoCart,
}) {
  // Вертска компонента Home
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className="content p-40">
      <div className="d-flex mb-40 justify-between align-center">
        <h1>
          {searchValue ? `Поиск по запросу:''${searchValue}'` : 'Все кроссовки'}
        </h1>
        <div className="  search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="/img/btnrem.svg"
              alt=""
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearchinput}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddtoCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  ) : (
    <RegisterPage></RegisterPage>
  );
}
export default Home;
