const navbar = document.querySelector('.navbar');

navbar.innerHTML = `<a class="navbar-brand" href="#"><img src="./images/navbar/logo.png" id="logo"/></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#" id="about"><span class="sr-only"></span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" id="members"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" id="contact"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" id="website"></a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0" id="search-wrapper">
    <input class="form-control mr-sm-2" id="search" placeholder="Search" aria-label="Search">
  </form>
</div>`;
