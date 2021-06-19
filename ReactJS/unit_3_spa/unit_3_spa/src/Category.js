
function Category(props) {
    let CatNav = props.data;
    const listCat = CatNav.map(item =>
        <li key={item.text}><a href={item.link}> {item.text}</a> </li>
    );
    return (
        <>
            <h1>Category</h1>
            <ul>
                {listCat}
            </ul>
        </>
    );
}

export default Category;
