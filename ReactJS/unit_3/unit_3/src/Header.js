
function Header(props) {
    let HeadNav = props.data;
    const listItem = HeadNav.map(item =>
        <li key={item.text}><a href={item.link}> {item.text}</a> </li>
    );

    return (
        <>
            <nav>
                <ul>
                    {listItem}
                </ul>
            </nav>

        </>
    );
}
export default Header



