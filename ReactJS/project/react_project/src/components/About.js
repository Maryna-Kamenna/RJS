
function About() {
    return (
        <div class="text-center container">
            <div>
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Maybe here?</a>
                <ul className="dropdown-menu ">
                    <li><a className="dropdown-item" href="#!">About us</a></li>
                    <li><a className="dropdown-item" href="#!">About site</a></li>
                    <li><a className="dropdown-item" href="#!">Contacts</a></li>
                    <li><a className="dropdown-item" href="#!">Social media</a></li>
                </ul>
            </div>
            <p>You're on a site that's built with React. It interacts with a database,  where you can write your notes,  view them using hash and add new ones</p>
        </div>
    );
}

export default About;