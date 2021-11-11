import { useParams } from 'react-router-dom';

function CategoryDescription() {
  let { catName } = useParams();
  return(
  <div>
    <a href='/category'>Назад</a>
    <h1>Category: {catName}</h1>
  </div>
  )  
}

export default CategoryDescription;