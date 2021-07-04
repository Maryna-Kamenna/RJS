import { useParams } from 'react-router-dom';

function CategoryDescription() {
    let { cateName } = useParams()

    return (
        <>

            <a href="/cat">Назад</a>
            <h1> Category: {cateName} </h1>

        </>
    );
}

export default CategoryDescription;