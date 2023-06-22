<script setup>
import axios from "axios"
</script>
<template>
    <main>
        <header class="header">
            <div>
                <h1>
                    Búsqueda por número de colaborador
                </h1>
            </div>
        </header>
        <div class="sidebar">
            <div>
                <div>
                    <!-- Le da a la imagen la propiedad de redirigirla al inicio -->
                    <RouterLink to="/Dashboard"> <img src="../assets/Imagenes/Logo2.png" title="Logo de oasis"
                            name="Logo" /></RouterLink>
                </div>
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
                            Buscar por número de colaborador
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
                            Buscar por panel y numero de colaborador
                        </span>
                    </li>
                </RouterLink>
            </ul>
        </div>
        <!-- Tabla de contenido -->
        <div class="Contenido">
            <div class="buscador">
                <label>Ingrese el numero del colaborador</label>
                <!--Recibe un dato y lo almacena para ser usuada-->
                <input type="number" id="numero" name="num" value="" style="border-radius: 4%;"
                    placeholder="Ingrese el numero del colaborador" />
                <!--Cuando se le da click llama a una funcion esta funcion recibe los datos del input -->
                <button @click="consultarpracticantes()" class="btn btn-primary" style="padding-right: 1%;">Buscar</button>
                <!--Redirije a otra vista-->
                <RouterLink to="BusquedaFechaYNumEmp" class="IrABusqueda">
                    <bottom class="btn btn-primary">Busqueda por fecha</bottom>
                </RouterLink>
                <!--Llama a una funcion la cual recibe los datos que estan en la tabla y lo vuelve un excel-->
                <button id="Excel" @click="tableToExcel()" class="btn btn-success" style=" margin-left: 4.3%;padding-left: 1%;
                padding-right: 1%;">Exportar a Excel</button>
            </div>
            <div class="tabla" style="width: 97%;height: 1770%;">
                <table id="mytable" class="table">
                    <thead>
                        <tr class="Arriba"><!--Titulo de las columnas-->
                            <th>Id</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Registro</th>
                            <th>Numero del colaborador</th>
                            <th>Numero de la tarjeta</th>
                            <th>Nombre completo</th>
                            <th>Departamento</th>
                            <th>Panel</th>
                            <th style="visibility: collapse; display:None;">Horas totales</th> <!--Columna oculta-->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tblEvents in practicante" :key="tblEvents.idAutoEvents">
                            <!--A cada columna se la escribe una o mas fila dependiendo lo que encontro la busqueda-->
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
                            <td style="visibility: collapse; display:None;">{{ tblEvents.formla }} </td> <!--Fila oculta-->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
<script>
//Crea una funcion la cual transforma la tabla a excel
function tableToExcel() {
    //Llama a la id mytable y los datos que tiene esa tabla los mete a un excel mediente una libreria
    $("#mytable").table2excel({
        //El nombre del archivo el cual se crear
        filename: 'Colaborador_' + document.getElementById('numero').value + '.xls',
        name: "worksheet"
    })
    //Manda una alerta al usuario
    window.alert('Esto podria demorar unos segundos');
}
//Exporta una funcion la cual retorna 3 objetos
export default {
    data() {
        return {
            practicante: [],
            form: {
                "numero": "",
                "fecha": ""
            }
        };
    },
    methods: {
        //Funcion asincrona que trae los datos para la tabla
        async consultarpracticantes() {
            this.form.numero = document.getElementById('numero').value;//Obtiene el valor de la id
            //Funcion de axios para el get que recibe un valor
            try 
            {
                await axios.get('https://localhost:5001/tblEvents/numemp?numemp=' + this.form.numero).then((result) => {
                    //Datos devueltos para la consola
                    console.log(result.data.result);
                    //Datos que se le devolveran a la tabla
                    this.practicante = result.data.result;
                    //Verificador de variables sirve para saber si la variable viene nula o es el valor es 0
                    if (result.data.result == 0 || result.data.result == null) {
                        window.alert('No se encontró ningun registro');
                    }
                });
            } 
            catch 
            {
                window.alert('No se encontró ningun registro');
            }

        },
    },
};
</script>
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
    background-image: url("../assets/Imagenes/Logo2.png");


}

/*Contenedor*/
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

/*Botones*/
#Excel {
    padding-right: inherit;
    margin-left: 0.3%;
    margin-right: 0%;
}

.buscador button {
    padding-right: inherit;

    margin-left: 1%;
    margin-right: -2.7%;

}

.IrABusqueda {
    margin-left: 8%;
}

/*Tabla*/
.Arriba {
    background-color: #497ceb;
    color: white;
}

/*Buscador*/
.buscador {
    font-size: 180%;
}

.buscador,
label {
    padding-right: 2%;
}

.buscador input {
    border-radius: 4%;
    height: 99%;
    width: 27%;

}

/*Diseño de la barra vertical*/
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

/*Nombre de la pestaña*/
h1 {
    font-size: 300%;
    padding-left: 10%;
    text-align: center;
}</style>
