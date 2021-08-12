
function About() {
    return (
        <div class="container">
            <div>
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Может тут?</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"> О нас</a></li>
                    <li><a className="dropdown-item" href="#">О сайте</a></li>
                    <li><a className="dropdown-item" href="#">Контакты</a></li>
                    <li><a className="dropdown-item" href="#">Мы в соц сетях</a></li>
                </ul>
            </div>
            <p>Вы находитесь на сайте, который создан на React. Он взаимодействует с базой даных в которую Вы можете записывать свои note, а также просматривать их и добавлять новые</p>
        </div>
    );
}

export default About;