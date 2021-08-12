import { NavLink } from 'react-router-dom'
function Header() {

  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Marina</a>
        <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">

          <a className="nav-item" id="pills-home-tab" data-toggle="tab" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><NavLink exact className="nav-link" to='/'>Home</NavLink></a>

          <a className="nav-item" id="note-tab" data-toggle="tab" href="#pills-note" role="tab" aria-controls="note" aria-selected="false"><NavLink exact className="nav-link" to='/note'>Note</NavLink></a>

          <a className="nav-item" id="create-tab" data-toggle="tab" href="#pills-create" role="tab" aria-controls="create" aria-selected="false"><NavLink exact className="nav-link" to='/create'>Create</NavLink></a>

          <a className="nav-item" id="about-tab" data-toggle="tab" href="#pills-about" role="tab" aria-controls="about" aria-selected="false"><NavLink exact className="nav-link" to='/about'>About</NavLink></a>
        </div>
      </nav>
      </div>
    </>
  );

}

export default Header;