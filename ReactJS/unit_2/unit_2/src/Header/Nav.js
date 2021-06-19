function Nav(props) {
    let data = props.nav;
    const listItem = data.map(item =>
        <li key={item.text}><a href={item.link}> {item.text}</a> </li>
    );
    return (
        < nav >
            <ul>
                {listItem}
            </ul>
        </nav >
    )
}

export default Nav