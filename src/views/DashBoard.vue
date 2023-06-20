<script setup>
import Logo from '../components/Inicio.vue'
</script>
<template>
    <main>
        <div class="sidebar">
            <div>
                <!-- Le da a la imagen la propiedad de redirigirla al inicio -->
                <RouterLink to="/Dashboard"> <img src="../assets/Imagenes/Logo2.png" title="Logo de oasis" name="Logo" /></RouterLink> 
            </div>
            <ul class="nav-list"> <!-- Contenedor de la lista vertical -->
                <a href="Dashboard"> <!-- Le da al texto la propiedad de redirigir al inicio -->
                    <li class="nav-item" style="padding-left: 4%;">
                        <span class="nav-item__icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span class="nav-item__text">
                            Inicio
                        </span>
                    </li>
                </a>
                <!-- Le da al texto la propiedad de redirigir al inicio -->
                <RouterLink to="/BusquedaNum">
                    <li class="nav-item" style="padding-left: 4%;">
                        <span class="nav-item__icon"><ion-icon name="chatbox-outline"></ion-icon></span>
                        <span class="nav-item__text"> 
                            Buscar por número de empleado 
                        </span>
                    </li>
                </RouterLink>
                <!-- Le da al texto la propiedad de redirigir al inicio -->
                <RouterLink to="/BusquedaCodeCard">
                    <li class="nav-item" style="padding-left: 4%;">
                        <span class="nav-item__icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="nav-item__text">
                            Buscar por codigo de tarjeta
                        </span>
                    </li>
                </RouterLink>
                <!-- Le da al texto la propiedad de redirigir al inicio -->
                <RouterLink to="/BusquedaFull">
                    <li class="nav-item" style="padding-left: 4%;">
                        <span class="nav-item__icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span class="nav-item__text">
                            Buscar por nombre completo
                        </span>
                    </li>
                </RouterLink>
                <!-- Le da al texto la propiedad de redirigir al inicio -->
                <RouterLink to="/BusquedaNumpYPanel">
                    <li class="nav-item" style="padding-left: 4%;">
                        <span class="nav-item__icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="nav-item__text">
                            Buscar por panel y numero de empleado
                        </span>
                    </li>
                </RouterLink>
            </ul>
        </div>
        <div class="Imagen">
            <Logo/>
        </div>
    </main>
</template>
<style>
/* Se llama a una fuente de texto */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
/*Para todo los diseños*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    color: #fff;
    text-decoration: none;
}
body {
    font-family: "Roboto", sans-serif;
}
/*Diseño de la barra vertical*/
.Imagen {
    padding: top 15%;
    height: 20%;
    width: 200%;
}
.sidebar {
    width: 9%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 100;
    cursor: pointer;
    background: #497ceb;
    transition: 0.5s;
    overflow: hidden;
}
.sidebar:hover {
    width: 20%;
}
.brand {
    text-align: center;
    font-size: 1.4rem;
    padding: 1rem 0;
    color: #ffffff;
}
img {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    height: 100%;
}
.brand:hover {
    background: #2556be;
}
.brand span {
    display: none;
}
.nav-list {
    list-style: none;
    padding-bottom: 180%;
}
.nav-item {
    padding-top: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30%;

}
.nav-item:hover {
    background: #2556be;
}
.nav-item a {
    position: relative;
    white-space: nowrap;
    display: flex;
    gap: 1rem;
}
.nav-item__icon {
    position: relative;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-item__text {
    position: relative;
    display: none;
    font-size: 1em;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.avatar {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: 700;
}
.logout {
    margin-left: 0.2rem;
}
.sidebar:hover .brand span {
    display: inline;
}
.sidebar:hover .nav-item {
    justify-content: start;
}
.sidebar:hover .nav-item__text {
    display: flex;
    align-items: center;
}
</style>
