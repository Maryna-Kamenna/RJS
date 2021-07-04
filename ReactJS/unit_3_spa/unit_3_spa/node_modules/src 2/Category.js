import { useRouteMatch } from 'react-router-dom';

function Category() {
  let match = useRouteMatch()
  return (
    <nav>
      <ul>
        <li><a href={`${match.url}/notebook`}>Ноутбуки</a></li>
        <li><a href={`${match.url}/monitor`}>Мониторы</a></li>
        <li><a href={`${match.url}/cellphone`}>Мобильные телефоны</a></li>
      </ul>
    </nav >

  );
}

export default Category;