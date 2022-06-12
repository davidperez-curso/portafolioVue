<template>
    <div class="skills text-white d-flex flex-column align-items-xl-center justify-content-xl-center animate__animated animate__fadeIn">
        <div class="tituloSkills h1">HABILIDADES Y CONOCIMIENTOS</div>
        <div class="lista">Vue3 con Composition api, Script setup, VueRouter4, Pinia y Vite</div>
        <div class="lista">Vue2 con Options api, Vuex y VueRouter</div>
        <div class="lista">Javascript</div>
        <div class="lista">Aplicaciones híbridas para Android con framework Quasar V1 y V2 y Android Studio, </div>
        <div class="lista">compilaciones con framework Cordova para archivos apk y aab, subir aplicaciones a Google playStore </div>
        <div class="lista">Conocimientos básicos en NUXT</div>
        <div class="lista">Bootstrap5, Vuetify, VueBootstrap, CSS en general</div>
        <div class="lista">Animaciones con Animate.CSS, AnimeJS</div>
        <div class="lista">Conocimientos básicos en PHP (aprendiendo!)</div>
        <div class="tituloSkills h2 mt-2">Herramientas</div>
        <div class="lista">Mockup con plataforma Miro</div>
        <div class="lista">Prototipos con plataforma Figma</div>
        <div class="lista">Organización del trabajo con Trello</div>
        <div class="lista">Edición de imágenes con Photoshop</div>
        <div class="lista">Creación y Edición de iconos svg/png con Lunacy</div>
        <div class="lista">Creación de archivos H5P con Lumi</div>

    </div>
</template>

<script setup>
import 'animate.css';
</script>

<style scoped>

/* PANTALLA CELULAR */
@media only screen
  and (min-width : 320px)
  and (max-width : 480px) {

.skills{
    width: 300px;
    margin-left: 2em;
    
}
.tituloSkills{
    text-align: center;
}
.lista{
    margin-bottom: 1em;
    text-align: center;
}

}

/* PANTALLA PC */
@media only screen
  and (min-width : 1224px) {

.skills{
    height: 100vh;
}

}

/* PANTALLA TABLET */
@media only screen
  and (min-width : 600px)
  and (max-width : 1024px) {

.skills{
   width: 100vw; 
   display: flex;
   justify-content: center;
}
.tituloSkills{
    text-align: center;
}
.lista{
    margin-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
    text-align: center;
}

}
</style>