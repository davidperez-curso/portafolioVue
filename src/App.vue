<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const menuMobile = ref(false)
</script>

<template>
<div class="contenedor row">
  <div class="col-xl-2 text-light">
    <p class="titulo">PORTAFOLIO WEB</p> 
  </div>
  
  <nav class="col-xl-2 navbar navbar-expand-sm">
    <div class="container-fluid">
      <button @click="menuMobile = !menuMobile"
        class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="menuMobile ?  'collapse navbar-collapse show' : 'collapse navbar-collapse' "  id="navbarSupportedContent"> <!-- agregar show -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-xl-start flex-xl-column justify-content-center">
          <li class="nav-item">
            <RouterLink class="link nav-link"  to="/">INICIO</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="link nav-link" to="/about">ACERCA DE MI</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="link nav-link" to="/skills">HABILIDADES</RouterLink>
          </li>
          <li class="nav-item">
            <a class="link nav-link" href="https://www.linkedin.com/in/dperezch/" target="_blank" >LINKEDIN</a>
          </li>
          <li class="nav-item">
            <a class="link nav-link" href="mailto:davarmando@gmail.com">CONTACTO</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="col-xl-8">
    <RouterView/>
  </div>
</div>
<p class="text-white-50 text-center small">&#169; 2022 David Pérez - Este sitio fue creado con Vue3</p>
  
  
</template>

<style>
.titulo{
  font-size: 30px;
  text-align: center;
  margin-top: 1em;
}
.link{
  color: crimson;
}
.navbar-nav{
  --bs-nav-link-hover-color: rgb(148, 148, 148);
}
.navbar-toggler-icon{
  color: aqua;
}
li{
  margin-left: 1em;
}

/* PANTALLA PC */
@media only screen
and (min-width : 1224px) {
.contenedor{
  height: 90vh;
  width: 100vw;
}
.titulo{
  margin-top: 1.5em;
  font-size: 96px;
  transform: rotate(90deg);
  white-space: nowrap;
}
.link{
  margin-top: 2em;
  text-decoration: none; 
  color: rgb(148, 148, 148);
}
.link:hover{
  color: crimson;
}
.navbar-nav{
  --bs-nav-link-hover-color: white;
}
}

/* PANTALLA TABLET */
@media only screen
  and (min-width : 600px)
  and (max-width : 1024px) {

.contenedor{
  width: 100vw;
  display: flex;
  justify-content: center;

}

}

</style>
