<template>
  <div class="inicio">
    <b-container fluid>
      <b-row>
        <div class="topBar">
          <a href="/"><img src="../../assets/back.png" height="75" width="75"></a>
          <a class = "Titulo">Proyectos</a>
        </div>
      </b-row>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <div class="proy">
            <div class="mostrarProyectos">
              <p> Mis proyectos </p>
              <ul class="proyectosUsuario">
              <li v-for="(data, index) in proyectos" :key='index'>
                {{ data.proyecto }}
                <b-button class="accionProyecto"><img src="../../assets/del.png" height="18"> </b-button>
                <b-button class="accionProyecto"><img src="../../assets/edit.png" height="18"> </b-button>
              </li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'crearProyectos',
  data() {
    return{
      proyectos: [
        {"proyecto": "Proyecto 1"},
        {"proyecto": "Proyecto 2 jkhdaksj"},
        {"proyecto": "proyecto"}    
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.topBar{
  width: 100%;
  height: 90px;
  background-color: #90caf9;
  background-size: cover; 
  top: 0px;
  left: 0px;
  position: relative;
  padding: 0.5rem;
}
.Titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left:10px;
}
.mostrarProyectos {
  background: #fff;
}
.accionProyecto{
  background-color: #23272d;
  padding: .2rem .3rem .3rem .3rem;
  border-radius: 50%;
  border-color: transparent;
  margin-right: 5px;
  float:right;
}
button:focus{
  border-color:transparent;
  outline: none;
}
button:hover{
  background-color: lightslategray;

}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}

p {
  text-align:center;
  padding: 20px;
  color: black;
}

.proy {
  margin-top:50px;
  box-shadow: 0px 0px 40px lightgray;
}

</style>

