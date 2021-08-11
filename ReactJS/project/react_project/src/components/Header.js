import { NavLink } from 'react-router-dom'
function Header() {

  return (
    <>
      <nav>
        <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">

          <a className="nav-item" id="pills-home-tab" data-toggle="tab" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><NavLink exact className="nav-link" to='/'>Home</NavLink></a>

          <a className="nav-item" id="note-tab" data-toggle="tab" href="#pills-note" role="tab" aria-controls="note" aria-selected="false"><NavLink exact className="nav-link" to='/note'>Note</NavLink></a>

          <a className="nav-item" id="create-tab" data-toggle="tab" href="#pills-create" role="tab" aria-controls="create" aria-selected="false"><NavLink exact className="nav-link" to='/create'>Create</NavLink></a>

          <a className="nav-item" id="about-tab" data-toggle="tab" href="#pills-about" role="tab" aria-controls="about" aria-selected="false"><NavLink exact className="nav-link" to='/about'>About</NavLink></a>
        </div>
      </nav>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Вы находитесь на сайте, который создан на React. Он взаимодействует с базой даных в которую Вы можете записывать свои note, а также просматривать их и добавлять новые</div>
        <div className="tab-pane fade" id="pills-note" role="tabpanel" aria-labelledby="pills-note-tab">...</div>
        <div className="tab-pane fade" id="pills-create" role="tabpanel" aria-labelledby="pills-create-tab"> <p>Основан на компонентах
          Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы.</p> </div>

        <div className="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">
          Декларативный
          Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. React будет своевременно их обновлять, когда данные изменяются.
          Декларативные представления сделают код более предсказуемым и упростят отладку.
        </div>
      </div>

    </>
  );

}

export default Header;