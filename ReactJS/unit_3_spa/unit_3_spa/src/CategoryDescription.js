import { useParams } from 'react-router-dom';

function CategoryDescription() {
    let { cateName } = useParams()
    return (
        <>
            <a href="/">Назад</a>
            <h1> Category: {cateName} </h1>
        </>
    );
}

export default CategoryDescription;