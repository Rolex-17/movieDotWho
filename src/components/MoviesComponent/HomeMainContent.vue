<template>
    <div class="box box2">
        <div class="image-box">
          <div class="details-box">
            <div class="heading">
              <h3>Search Your Movie</h3>
              <p>Please write the movie name and the movie year</p>
            </div>
            <div class="search-box">
              <div class="search-form">
                
                <div class="input-text">
                  <i
                  class="fa-solid fa-magnifying-glass"
                ></i>
                  <input type="text" name="" id="inputTxt" />
                </div>
                
                <div class="input-calendar">
                  <i class="fa-solid fa-calendar"></i>
                  <input
                  type="number"
                  name=""
                  id="inputYear"
                  min="1990"
                  max="2023"
                />
                
                </div>
                
              </div>

              <input type="submit" id="inputSubmit" value="Search" />
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
.box2 {
  /* border: 1px solid magenta; */
  height: 45vh;
  width: 98%;

  margin: auto;
  margin-top: 0.5rem;
  /* border: 1px solid magenta; */
  /* background: linear-gradient(to left,
    rgba(0,0,0,1) ,
    rgba(0,0,0,.7) 40%,
    rgba(0,0,0,.4) 70%,
    rgba(0,0,0,0) 100%); */
}
.image-box {
  /* border: 1px solid black; */
  height: 100%;
  width: 100%;
  background: #0a06137d url("/src/assets/images/Hanna.jpg");
  background-size: cover;
  background-position: top 35% center;
  background-blend-mode: soft-light;
  text-align: center;

  /* background-color: linear-gradient(to left,
    rgba(0,0,0,1) ,
    rgba(0,0,0,.7) 40%,
    rgba(0,0,0,.4) 70%,
    rgba(0,0,0,0) 100%); */
  /* border: 1px solid red; */
  box-shadow: 0 1px 1px #0a061372, 0 2px 2px #0a061372, 0 4px 4px #0a061372,
    0 8px 8px #0a061372;

  /* box-shadow: 0 1px 1px #0a0613af, 
    0 2px 2px #0a0613af, 
    0 4px 4px #0a0613af, 
    0 8px 8px #0a0613af; */

  /* box-shadow: 0 25px 50px -12px #0a06133a); */
}

.search-box {
  /* border: 1px solid red;   */
  display: block;
  text-align: center;
  margin-top: 4rem;
}

.heading {
  padding: 0.7rem 1rem;
  /* margin-top: 2rem; */
  /* border: 1px solid white; */
}
.heading h3 {
  font-size: 3em;
  /* color: #ffff;
    color: #00e0f0;
    color: #11bec4; */
  color: #fff;
  letter-spacing: 1.5px;
}
.heading p {
  /* color: rgba(255, 68, 0, 0.784); */
  color: #ffffff9d;
  font-weight: 500;
  font-size: 1.3em;
  margin-top: -0.3rem;
  letter-spacing: 2px;
}
.search-box {
  /* border: 1px solid red; */
  width: 99%;
  height: 125px;
  text-align: center;
  margin: auto;
  overflow: hidden;
  margin-top: 3rem;
}
.search-form {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 0.5rem;
  /* border: 1px solid magenta; */
}
.search-form .input-text {
  width: 700px;
  height: 50px;
  overflow: hidden;
  position: relative;
  backdrop-filter: saturate(130%) blur(10px);
  box-shadow: 1px 1px 1px #0a061372, 2px 2px 2px #0a061372,
    4px 4px 4px #0a061372, 8px 8px 8px #0a061372;
  /* border: 1px solid magenta; */
}
.search-form .input-text .fa-magnifying-glass {
  position: absolute;
  color: magenta;
  font-size: 1.7em;
  top: 10px;
  right: 20px;
}

.search-form #inputTxt {
  width: 100%;
  height: 97%;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  /* border-bottom: 1px solid #fff; */
  /* width: 400px;
  /* height: 40px; */
  /* margin: 1rem 2rem; */
  /* /* padding: 0.5rem; */
  /* position: relative; */
  /* border: 0; */
  /* outline: 0; */
  /* padding: 0.5rem;
    */
}
::placeholder {
  /* color: rgba(255, 68, 0, 0.784); */
  color: #ffffff9d;
  font-size: 1.4em;
  letter-spacing: 2px;
}
.search-form .input-calendar {
  width: 120px;
  height: 50px;
  position: relative;
  margin: 0 0 0 0.6rem;
  overflow: hidden;
  backdrop-filter: saturate(130%) blur(10px);
  box-shadow: 1px 1px 1px #0a061372, 2px 2px 2px #0a061372,
    4px 4px 4px #0a061372, 8px 8px 8px #0a061372;
}
.search-form .fa-calendar {
  position: absolute;
  color: magenta;
  font-size: 1.7em;
  right: 10px;
  top: 11px;
}
.search-form #inputYear {
  width: 100%;
  height: 100%;
  margin-right: 1rem;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-right: none;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.search-box input[type="submit"] {
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 20px;
  width: 120px;
  margin-top: 1.5rem;
  letter-spacing: 1px;
}
.search-box input[type="submit"]:hover {
  color: white;
  background-color: #fff;
  cursor: pointer;
}

@media only screen and (max-width:425px) {
  .box2 {
    /* border: 1px solid magenta; */
    overflow: hidden;
  }
  .details-box {
    /* border: 1px solid red; */
    height: 98%;
  }
  .heading {
    /* border: 1px solid magenta; */
    width: 98%;
    padding: 0 0.2rem;
    text-align: center;
  }
  .heading h3 {
    font-size: 2em;
    margin-bottom: 0.4rem;
  }
  .heading p {
    font-size: 1em;
  }

  .search-box {
    /* border: 1px solid magenta; */
    width: 99%;
    height: 72%;
    margin: 0;
    margin: auto;
    text-align: center;
  }
  .search-form {
    /* border: 1px solid magenta; */
    width: 97%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 3rem;
  }
  .search-form .input-text {
    width: 300px;
    height: 40px;
    overflow: hidden;
  }
  .search-form .input-text .fa-magnifying-glass {
    position: absolute;
    color: magenta;
    font-size: 1.2em;
    top: 13px;
    right: 5px;
  }
  .search-form .input-calendar {
    width: 100px;
    height: 40px;
    margin: 0 0 0 0.6rem;
    overflow: hidden;
    /* border: 1px solid magenta; */
  }
  .search-form .input-calendar .fa-calendar {
    position: absolute;
    color: magenta;
    font-size: 1.2em;
    right: 5px;
    top: 11px;
  }
  .search-box #inputSubmit {
    margin-top: 1rem;
    font-size: 1em;
    padding: 0.5rem 0.8rem;
    width: 83px;
    border-radius: 2px;
    /* border: 1px solid #fff; */
    background-color: magenta;
    border: none;
  }
  ::placeholder {
    color: #ffffff9d;
    font-size: 16px;
    letter-spacing: 1.5px;
    padding-left: 0.5rem;
  }
}

@media only screen and (max-width: 567px) and (min-width: 425px) {
  .details-box {
    height: 98%;
    overflow: hidden;
  }
  .heading {
    width: 98%;
    padding: 0 0.2rem;
    text-align: center;
    margin: auto;
    /* border: 1px solid magenta; */
  }
  .heading h3 {
    font-size: 2.5em;
    margin-bottom: 0.4rem;
  }
  .heading p {
    font-size: 1.15em;
  }

  .search-box {
    /* border: 1px solid magenta; */
    width: 99%;
    height: 75%;
    margin: 0;
    margin: auto;
    text-align: center;
  }
  .search-form {
    /* border: 1px solid magenta; */
    width: 97%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 3rem;
  }
  .search-form .input-text {
    width: 390px;
    height: 40px;
    overflow: hidden;
  }
  .search-form .input-text .fa-magnifying-glass {
    position: absolute;
    color: magenta;
    font-size: 1.5em;
    top: 9px;
    right: 5px;
  }
  .search-form .input-calendar {
    width: 110px;
    height: 40px;
    margin: 0 0 0 0.6rem;
    overflow: hidden;
    /* border: 1px solid magenta; */
  }
  .search-form .input-calendar .fa-calendar {
    position: absolute;
    color: magenta;
    font-size: 1.5em;
    right: 5px;
    top: 9px;
  }
  .search-box #inputSubmit {
    margin-top: 2rem;
    font-size: 1em;
    padding: 0.7rem 0.8rem;
    width: 90px;
    border-radius: 2px;
    /* border: 1px solid #fff; */
    background-color: magenta;
    border: none;
  }
  ::placeholder {
    color: #ffffff9d;
    font-size: 16px;
    letter-spacing: 1.5px;
    padding-left: 0.5rem;
  }
}

@media only screen and (max-width: 792px) and (min-width: 567px) {
  .heading {
    /* border: 1px solid magenta; */
    padding: 0 0.2rem;
  }
  .heading h3 {
    font-size: 2.9em;
    margin-top: -0.4rem;
    margin-bottom: 0.2rem;
  }
  .heading p {
    font-size: 1.2em;
  }

  .search-box {
    /* border: 1px solid magenta;  */
    margin-top: 0;
    height: 200px;
  }
  .search-form {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 3.5rem;
    /* border: 1px solid magenta; */
  }
  .search-form .input-text {
    width: 530px;
    height: 47px;
    overflow: hidden;
  }
  .search-form .input-text .fa-magnifying-glass {
    position: absolute;
    color: magenta;
    font-size: 1.5em;
    top: 9px;
    right: 5px;
  }
  .search-form .input-calendar {
    width: 120px;
    height: 47px;
    margin: 0 0 0 0.6rem;
    overflow: hidden;
    /* border: 1px solid genta; */
  }
  .search-form .input-calendar .fa-calendar {
    position: absolute;
    color: magenta;
    font-size: 1.5em;
    right: 5px;
    top: 9px;
  }
  .search-box #inputSubmit {
    margin-top: 2rem;
    font-size: 1em;
    padding: 0.7rem 0.8rem;
    width: 90px;
    border-radius: 2px;
    /* border: 1px solid #fff; */
    background-color: magenta;
    border: none;
  }
  ::placeholder {
    color: #ffffff9d;
    font-size: 16px;
    letter-spacing: 1.5px;
    padding-left: 0.5rem;
  }
}

@media only screen and (max-width: 1100px) and (min-width: 792px) {
  .box2{
    /* border: 1px solid red; */
    height: 48vh;
  }
  .heading {
    /* border: 1px solid magenta; */
    padding: 0 0.2rem;
  }
  .heading h3 {
    font-size: 2.925em;
    margin-top: -0.4rem;
    margin-bottom: 0.1rem;
  }
  .heading p {
    font-size: 1.15em;
  }

  .search-box {
    /* border: 1px solid magenta;  */
    margin-top: 0;
    height: 200px;
  }
  .search-form {
    width: 77%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 3.5rem;
    /* border: 1px solid magenta; */
  }
  .search-form .input-text {
    width: 650px;
    height: 50px;
    overflow: hidden;
  }
  .search-form .input-text .fa-magnifying-glass {
    position: absolute;
    color: magenta;
    font-size: 1.5em;
    top: 9px;
    right: 5px;
  }
  .search-form .input-calendar {
    width: 120px;
    height: 50px;
    margin: 0 0 0 0.6rem;
    overflow: hidden;
    /* border: 1px solid genta; */
  }
  .search-form .input-calendar .fa-calendar {
    position: absolute;
    color: magenta;
    font-size: 1.5em;
    right: 5px;
    top: 9px;
  }
  .search-box #inputSubmit {
    margin-top: 2rem;
    font-size: 1.05em;
    padding: 0.8rem 0.825rem;
    width: 100px;
    border-radius: 2px;
    /* border: 1px solid #fff; */
    background-color: magenta;
    border: none;
  }
  ::placeholder {
    color: #ffffff9d;
    font-size: 18px;
    letter-spacing: 1.5px;
    padding-left: 0.5rem;
  }
}
</style>