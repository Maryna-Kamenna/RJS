import { NavLink } from 'react-router-dom'
function Header() {

  return (
    <>
      <div class="navbar flex-column">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Marina</a>

          <div className="container">

            <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">

              <NavLink className="nav-item " id="pills-home-tab" data-toggle="tab" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" exact className="nav-link" to='/'>Home</NavLink>

              <NavLink className="nav-item" id="note-tab" data-toggle="tab" href="#pills-note" role="tab" aria-controls="note" aria-selected="false" exact className="nav-link" to='/note'>Note</NavLink>

              <NavLink className="nav-item" id="create-tab" data-toggle="tab" href="#pills-create" role="tab" aria-controls="create" aria-selected="false" exact className="nav-link" to='/create'>Create</NavLink>

              <NavLink className="nav-item" id="about-tab" data-toggle="tab" href="#pills-about" role="tab" aria-controls="about" aria-selected="false" exact className="nav-link" to='/about'>About</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );

}

export default Header;