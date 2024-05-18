<template>
  <div class="sliding snaps-inline">
    <!-- width=177 height=255 -->

    <div class="card">
      <img :src="require(`/src/assets/images/leo.jpg`)" alt="leo movie poster" />
      <div class="content">
        <h3>Leo</h3>
        <p>2023</p>
      </div>
    </div>
    <div class="card">
      <img
        :src="require(`/src/assets/images/justice league.jpg`)"
        alt="justice league movie poster"
      />
      <div class="content">
        <h3>Justice League</h3>
        <p>2018</p>
      </div>
    </div>
    <div class="card">
      <img :src=" require(`/src/assets/images/leo.jpg`)" alt="leo movie poster" />
      <div class="content">
        <h3>Leo</h3>
        <p>2023</p>
      </div>
    </div>
    <div class="card">
      <img
      :src="require(`/src/assets/images/justice league.jpg`)"
        alt="justice league movie poster"
      />
      <div class="content">
        <h3>Justice League</h3>
        <p>2018</p>
      </div>
    </div>
    <div class="card">
      <img :src=" require(`/src/assets/images/leo.jpg`)" alt="leo movie poster" />
      <div class="content">
        <h3>Leo</h3>
        <p>2023</p>
      </div>
    </div>
    <div class="card">
      <img
      :src="require(`/src/assets/images/justice league.jpg`)"
        alt="justice league movie poster"
      />
      <div class="content">
        <h3>Justice League</h3>
        <p>2018</p>
      </div>
    </div>
    <div class="card">
      <img :src=" require(`/src/assets/images/leo.jpg`)" alt="leo movie poster" />
      <div class="content">
        <h3>Leo</h3>
        <p>2023</p>
      </div>
    </div>
    <div class="card">
      <img
      :src="require(`/src/assets/images/justice league.jpg`)"
        alt="justice league movie poster"
      />
      <div class="content">
        <h3>Justice League</h3>
        <p>2018</p>
      </div>
    </div>
  </div>

  <div class="all-movies">
    <router-link to="/result/movies">View all</router-link>
  </div>
</template>

<!-- <script>
export default{
  inject:['movies']
}
</script> -->



<style scoped>
.sliding {
  /* border: 1px solid magenta; */
  margin-top: 0.5rem;
  height: 40vh;
  padding: 0.45rem 0.9rem;
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
  overflow-y: hidden;
  animation: scroll 60s linear infinite;

  /* display: flex;
  flex-direction: row; */
  /* justify-content: space-between; */
  /* animation: scroll 60s linear infinite; */
}
.sliding::-webkit-scrollbar {
  display: none;
}
.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 0.5rem;
}
.snaps-inline > * {
  scroll-snap-align: start;
}
.card {
  /* border: 5px solid #fff; */
  width: 180px;
  height: 280px;
  border-radius: 5px;
  margin: 0rem 0.75rem;
  text-align: center;
  overflow: hidden;
  perspective: 260px;
}
.card img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}
.card img:hover {
  transform: translateZ(20px);
}

.content h3 {
  color: #fff;
  margin: 0.25rem;
}
.content p {
  color: rgba(255, 0, 255, 0.616);
  font-size: 0.9em;
  margin-top: -0.2rem;
  margin-left: 0.25rem;
}

@media only screen and (max-width: 425px) {
  .sliding {
    /* border: 1px solid magenta; */
    width: 97%;
    height: 500px;
    padding: 0.3rem;
    text-align: center;
  }
  .card {
    /* border: 1px solid magenta; */
    /* width: 150px; */
    width: 42%;
    height: 280px;
    /* height: 60%; */
    margin: 0.15rem 0.35rem;
    display: inline-block;
  }
  .card img {
    border: 3px solid #fff;
    width: 96%;
    height: 82%;
    overflow: hidden;
    object-fit: cover;
  }
  .content {
    /* border: 1px solid magenta; */
    margin-top: -0.45rem;
    text-align: left;
  }
  .content h3 {
    font-size: 1.1em;
  }
}

@media only screen and (max-width: 567px) and (min-width: 425px) {
  .sliding {
    /* border: 1px solid magenta; */
    width: 97%;
    height: 500px;
    padding: 0.3rem;
    text-align: center;
  }
  .card {
    /* border: 1px solid magenta; */
    /* width: 150px; */
    width: 190px;
    height: 290px;
    /* height: 60%; */
    margin: 0.15rem 0.35rem;
    display: inline-block;
    text-align: left;
    overflow: hidden;
  }
  .card img {
    border: 3px solid #fff;
    width: 80%;
    height: 83%;
    overflow: hidden;
    object-fit: cover;
  }
  .content {
    /* border: 1px solid magenta; */
    margin-top: -0.45rem;
    text-align: left;
  }
}

@media only screen and (max-width: 792px) and (min-width: 567px) {
  .sliding {
    /* border: 1px solid magenta; */
    width: 97%;
    height: 500px;
    padding: 0.3rem;
    text-align: center;
  }
  .card {
    /* border: 1px solid magenta; */
    /* width: 150px; */
    width: 160px;
    height: 290px;
    /* height: 60%; */
    margin: 0.15rem 0.7rem;
    display: inline-block;
    overflow: hidden;
  }
  .card img {
    border: 3px solid #fff;
    width: 97%;
    height: 83%;
    overflow: hidden;
    object-fit: cover;
  }
  .content {
    margin-top: -0.45rem;
    text-align: left;
  }
}

@media only screen and (max-width: 1100px) and (min-width: 792px) {
  .sliding {
    /* border: 1px solid magenta; */
    margin-top: 0.5rem;
    height: 44.5vh;
    padding: 0.5rem 0 0.1rem 0;
    display: grid;
    grid-auto-flow: column;
    overflow-x: scroll;
    overflow-y: hidden;
    animation: scroll 60s linear infinite;
  }
  .sliding::-webkit-scrollbar {
    display: none;
  }
  .snaps-inline {
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 0.5rem;
  }
  .snaps-inline > * {
    scroll-snap-align: start;
  }
  .card {
    /* border: 1px solid #fff; */
    width: 165px;
    height: 290px;
    border-radius: 5px;
    margin: 0rem 0.5rem;
    text-align: center;
    overflow: hidden;
    perspective: 260px;
  }
  .card img {
    border: 3px solid #fff;
    width: 96%;
    height: 83%;
    overflow: hidden;
    object-fit: cover;
  }
  .card img:hover {
    transform: translateZ(20px);
  }

  .content {
    margin-top: -0.45rem;
    text-align: left;
    /* border: 1px solid magenta; */
  }
  .content h3 {
    font-size: 1.15em;
  }
}
</style>
