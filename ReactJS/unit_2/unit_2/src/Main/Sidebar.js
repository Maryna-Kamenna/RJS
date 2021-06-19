import Nav from "../Header/Nav"

function Sidebar(props) {
    return (
        <ul>
            <Nav nav={props.data.nav} />

        </ul >)
}


export default Sidebar