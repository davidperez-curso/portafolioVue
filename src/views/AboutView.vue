<template>
  <div class="about container text-white pb-5 d-flex align-items-center flex-column justify-content-center animate__animated animate__fadeIn">
    <div class="h1 my-5">ABOUT ME</div>
    <div class="texto mx-5">
      <div>Hola, mi nombre es David Pérez, soy de Chile, tengo 35 años y soy licenciado en Artes Plásticas, estudié en la
      Universidad de Concepción de Chile y hace poco hice un curso Bootcamp de Desarrollador Front-End, me gusta el cine, la música y todo lo relacionado a las bellas artes. <br>
      Me apasiona el mundo del desarrollo web y el diseño, me gusta implementar mi creatividad en las páginas y aplicaciones
      que voy creando y estoy continuamente adquiriendo conocimientos en nuevas tecnologías
      </div>
      <div class="mx-xl-5">
        <img src="../assets/perfil.jpg" alt="">
      </div>
    </div>  
  </div>
</template>

<script setup>
import 'animate.css';
</script>

<style  scoped>
/* PANTALLA CELULAR */
@media only screen
  and (min-width : 320px)
  and (max-width : 480px) {
.texto{
  width: 300px;
  text-align: justify;
}

img{
  width: 300px;
}

}

/* PANTALLA PC */
@media only screen
  and (min-width : 1224px) {

.about{
  height: 100vh;
  width: 1000px;
}
img{
  width: 300px;
}
.texto{
  text-align: justify;
  display: flex;
  flex-direction: row;
}

}

/* PANTALLA TABLET */
@media only screen
  and (min-width : 600px)
  and (max-width : 1024px) {

.about{
  width: 100vw;
  display: flex;
  justify-content: center;
}
.texto{
  width: 400px;
  text-align: justify;
}

img{
  width: 400px;
}

}

</style>