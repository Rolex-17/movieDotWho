<template>
    <nav>
        <div class="navbar">
          <div class="nav-header">
            <h1>movieDotWho.in</h1>
          </div>
          <div class="nav-links">
            <ul>
              <li><router-link to="/result/main">Result Page</router-link></li>
              <li><router-link to="/home">Home</router-link></li>
              <li><a href="">About us</a></li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<style scoped>
nav {
  /* border: 1px solid magenta; */
  /* padding: .75rem 1.5rem; */
  height: 75px;
  background-color: #17093a;
}
.navbar {
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  width: 50%;

  position: absolute;
  top: 15px;
  left: 25%;
}
/* .nav-header{
    border: 1px solid #fff;
} */
/* .nav-links{
    border: 1px solid #fff;
} */
.navbar ul {
  display: flex;
}
.nav-links li {
  list-style-type: none;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  border: 1px solid magenta;
}
.nav-links li a {
  text-decoration: none;
  color: white;
}
.navbar h1 {
  color: white;
  font-size: 2.5em;
}

@media only screen and (max-width: 425px) {
  nav {
    height: 80px;
  }
  .navbar {
    /* border: 1px solid #fff; */
    width: 100%;
    height: 80px;
    flex-direction: column;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 1;
    background-color: #17093a;
  }
  .navbar h1 {
    font-size: 2em;
  }
  .nav-header {
    /* border: 1px solid #fff; */
    text-align: center;
  }
  .nav-links li {
    border: none;
    margin: 0;
    padding: 0.5rem 1.25rem 0.5rem 0.5rem;
  }
  .nav-links li a {
    font-size: 1em;
    border-bottom: 1px solid magenta;
  }
}

@media only screen and (max-width: 567px) and (min-width: 425px) {
  nav {
    height: 80px;
  }
  .navbar {
    /* border: 1px solid #fff; */
    width: 100%;
    height: 80px;
    flex-direction: column;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 1;
    background-color: #17093a;
  }
  .navbar h1 {
    font-size: 2em;
  }
  .nav-header {
    /* border: 1px solid #fff; */
    text-align: center;
  }
  .nav-links li {
    border: none;
    margin: 0;
    padding: 0.5rem 1.25rem 0.5rem 0.5rem;
  }
  .nav-links li a {
    font-size: 1em;
    border-bottom: 1px solid magenta;
  }
}

@media only screen and (max-width: 792px) and (min-width: 567px) {
  .navbar {
    /* border: 1px solid #fff; */
    width: 99.7%;
    height: 75px;
    position: fixed;
    left: 0px;
    top: 0px;

    z-index: 1;
    background-color: #17093a;
  }
  .nav-header {
    /* border: 1px solid orangered;  */
    padding: 0 0.4rem;
    margin: 0.9rem 0 0 0.7rem;
  }
  .nav-header h1 {
    font-size: 2em;
  }
  .nav-links {
    /* border: 1px solid rgb(194, 6, 6); */
    margin: 1rem 0 0 0.5rem;
  }
  .nav-links li {
    border: none;
    /* border: 1px solid magenta; */
    margin: 0;

    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }
  .nav-links li a {
    font-size: 1.1em;
    border-bottom: 1px solid magenta;
  }
}

@media only screen and (max-width: 1100px) and (min-width: 792px) {
  .navbar {
    /* border: 1px solid #fff; */
    width: 99.7%;
    height: 75px;
    position: fixed;
    left: 0px;
    top: 0px;

    z-index: 1;
    background-color: #17093a;
  }
  .nav-header {
    /* border: 1px solid orangered;  */
    padding: 0 0.4rem;
    margin: 0.9rem 0 0 3rem;
  }
  .nav-header h1 {
    font-size: 2.5em;
  }
  .nav-links {
    /* border: 1px solid rgb(194, 6, 6); */
    margin: 1.5rem 1rem 0 0.5rem;
  }
  .nav-links li {
    border: none;
    /* border: 1px solid magenta; */
    margin: 0;

    padding: 0.5rem 1.4rem 0.5rem 0.5rem;
  }
  .nav-links li a {
    font-size: 1.135em;
    letter-spacing: 1.8px;
    border-bottom: 1px solid magenta;
  }
}
</style>