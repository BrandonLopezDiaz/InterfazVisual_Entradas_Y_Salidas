<script setup>
import Logoo from '../components/Inicio.vue'
import DashBoard from '../views/DashBoard.vue'
import BusquedaCode from '../components/BusquedaCodeCard.vue'
import BusquedaNum from '../components/BusquedaNumEmpleado.vue'
import BusquedaFull from '../components/BusquedaFullName.vue'
import BusquedaFechaYNumEmp from './BusquedaFechaYNumEmp.vue'
import axios from "axios"
</script>
<template>
    <main>
        <header class="header">
            <div>
                <h1>
                    Búsqueda por número de practicante
                </h1>
            </div>
        </header>
        <div class="sidebar">
            <div>
                <RouterLink to="/Dashboard">
                    <img src="../assets/Imagenes/Logo2.png" title="Logo de oasis" name="Logo" />
                </RouterLink>
            </div>
            <ul class="nav-list">
                <a href="/Dashboard">
                    <li class="nav-item" style="padding-left: 4%;">
                        <span class="nav-item__icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="nav-item__text">
                            Inicio
                        </span>

                    </li>
                </a>
                <RouterLink to="/BusquedaNum">
                    <li class="nav-item" style="padding-left: 4%;">

                        <span class="nav-item__icon">
                            <ion-icon name="chatbox-outline"></ion-icon>
                        </span>
                        <span class="nav-item__text">
                            Buscar por número de practicante
                        </span>
                    </li>
                </RouterLink>
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
                <RouterLink to="/BusquedaNumpYPanel">
                    <li class="nav-item" style="padding-left: 4%;">

                        <span class="nav-item__icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span class="nav-item__text">
                            Buscar por panel y numero de empleado
                        </span>
                    </li>
                </RouterLink>
            </ul>
        </div>
        <!-- Tabla de contenido -->
        <div class="Contenido">
            <div class="buscador">
                <label>Ingrese el numero del practicante y panel</label>
                <input type="number" id="numero" name="num" value="" style="border-radius: 4%;" placeholder="Ingrese el numero del practicante"/>
                <select id="Panel"  >
                    <option selected>Elija un panel</option>
                    <option v-for="tblNetwork in Panel" :value="tblNetwork.idNetwork" :key="tblNetwork.idNetwork"> {{tblNetwork.tDescNetwork}}</option>
                </select>
                <button @click="consultarpracticantes()" class="btn btn-primary" style="padding-right: inherit; margin-right: -1.7%;margin-left: 1%;"  >Buscar</button>

                <RouterLink to="BusquedaNumEmpYPanelYFecha" class="IrABusqueda"><bottom class="btn btn-primary">Busqueda por fecha</bottom></RouterLink>
                <button id="Excel" @click="tableToExcel()" class="btn btn-success" style=" margin-left: 0.3%;">Exportar a Excel</button>
            </div>
            <div class="tabla" style="width: 97%;">
                <table id="mytable" class="table">
                    <thead>
                        <tr class="Arriba">
                            <th>Id</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Registro</th>
                            <th>Numero del practicante</th>
                            <th>Numero de la tarjeta</th>
                            <th>Nombre completo</th>
                            <th>Departamento</th>
                            <th>Panel</th>
                            <th style="visibility: collapse; display:None;">Horas totales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tblEvents in practicante" :key="tblEvents.idAutoEvents">
                            <td>{{ tblEvents.id }}</td>
                            <td>{{ tblEvents.descripcion }}</td>
                            <td>{{ tblEvents.fecha }}</td>
                            <td>{{ tblEvents.hora }}</td>
                            <td>{{ tblEvents.registro }}</td>
                            <td>{{ tblEvents.idEmpNum }}</td>
                            <td>{{ tblEvents.tarjeta }}</td>
                            <td>{{ tblEvents.nombre }}</td>
                            <td>{{ tblEvents.departamento }}</td>
                            <td>{{ tblEvents.panel }}</td>
                            <td style="visibility: collapse; display:None;">{{ tblEvents.formla }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
<script>
function tableToExcel(){
    $("#mytable").table2excel({
        filename: 'Colaborador_'+document.getElementById('numero').value + '.xls',
        name: "worksheet"
    })
    window.alert('Esto podria demorar unos segundos');
}
export default {
    data() {
        return {
            practicante: [],
            form: {
                "numero": "",
                "fecha": "",
                "panel":""

            },
            Panel:[]
        };
    },
    created: function(){
        this.ConsultarPanel();

    },
    methods: {
        async consultarpracticantes() {
            this.form.numero = document.getElementById('numero').value;
            this.form.panel = document.getElementById('Panel').value;
            await axios.get('https://localhost:7127/tblEvents/panelynum?id='+this.form.panel+'&numemp='+this.form.numero).then((result) => {
                console.log(result.data.result);
                this.practicante = result.data.result;
                if(result.data.result ==0){
                    window.alert('No se encontró ningun registro');
                } 
            });
        },
        async ConsultarPanel() {
            await axios.get('https://localhost:7127/tblNetwork').then((result) => {
                console.log(result.data.result);
                this.Panel = result.data.result;
            });
        },
        
    },

};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* Boton de busqueda por dos filtros*/

#Panel{
    MARGIN-LEFT: 1%;
    border-radius: 4%
}
/*Final de ese boton*/
a {
    color: #fff;
    text-decoration: none;
}

body {
    font-family: "Roboto", sans-serif;
    background-image: url("../assets/Imagenes/Logo2.png");

    
}
.Contenido {
    position: fixed;
    padding-top: 8%;
    padding-left: 14%;
    top: 0;
    left: 0;
    right: 0;
    height: 20%;
    width: 100%;
}
#Excel{
    padding-right: inherit;
    margin-left: 0.3%;
    margin-right: 0%;
}
.IrABusqueda{
    margin-left: 3%;
}
.Arriba{
    background-color:#497ceb;
    color: white;
}
.tabla{
    width: 97%;
    height: 1730%;
    overflow: scroll;
    background-color: white;
    border-radius: 1%;
}
.div table{
    width: 97%;
    height: 1730%;
    overflow: scroll;
    
}
.buscador{
    font-size: 180%;
}
.buscador,label{
    padding-right: 2%;
}
.buscador input{
    border-radius: 4%;
    height: 99%;
    width: 27%;
    
}
.buscador button{
    padding-right: inherit;
    margin-right: 1%;
    margin-left: 1%;
    
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

/* Header del programa*/
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.header div {
    width: 100%;
    color: white;
    background-color: #497ceb;
    z-index: 1;
}

h1 {
    font-size: 300%;
    padding-left: 10%;
    text-align: center;
}
</style>
