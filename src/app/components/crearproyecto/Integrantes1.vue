<template>
  <div>
  <b-container fluid>
    <b-row>
    <div class="topBar">
      <a class="back" href ="/"><img src="../../assets/back.png" height="75" width="75"></a>
      <a class = "Titulo">{{nombreProyecto}}</a>
    </div>
  </b-row>
      <b-row>
        <b-col cols="1">
         <div class="leftmenu">
          <b-button class="proyMenu"><img src="../../assets/borrador.png" height="72" width="72"></b-button>
          <b-button class="proyMenu"><img src="../../assets/req.png" height=50 width="50"></b-button>
          <b-button class="proyMenu"><img src="../../assets/srs.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/diagrama.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/chat.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/añadir.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/calendario.png" height="55" width="55"></b-button>
         </div>
        </b-col>
        <b-col>
          <b-form>
            <p class="Subtitulo">Agregar integrantes</p>
            <b-button class ="Agregar" type="submit"><img src="../../assets/plus.png" height="80" width="70"></b-button>
          </b-form>
        </b-col>
        <b-col>
          <p class="Subtitulo">Integrantes del proyecto</p>
          <div class="mostrarIntegrantes">
            <ul class="integrantesProyecto">
              <li v-for="(data, index) in integrantesProyecto" :key='index'>
                {{ data.integrante }}
                <b-button class="elim"><img align="right" src="../../assets/minus.png" height="10" width="10"></b-button>
              </li>
        </ul>
      </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'imagenDiagrama',
  data() {
    return{
      nombreProyecto: "Proyecto 1",
      integrantesProyecto: [
        {"integrante" : "Luis"},
        {"integrante" : "Miguel"},
        {"integrante" : "Hernan"},
        {"integrante" : "Guillermo"}
      ]
    }
  }
}
</script>

<style scoped>
.Agregar{
  margin-left: 40px;
  border-radius: 50%;
}
.elim{
  float:right;
  border-radius: 50%;
  padding: 0.5rem;
  position: absolute;
  right: 60px;
}
.Titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left:10px;
}
p{
  font-family: 'Montserrat', sans-serif;
}
p.ing{
  font-size: 14px;
  margin: .5rem;
}
p.Subtitulo{
  font-size: 24px;
  padding: 1rem;
  margin-left: 10px;
  margin-top: 15px;
}
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
.leftmenu{
    position: relative;
    width: 75px;
    height: 100%;
    left: -15px; 
    background-color: #555555;
}
button.proyMenu{
  outline:none;
  background-color:Transparent;
  border: 0px;
  position:relative;
  margin-top:5px;
  margin-bottom:5px;
  cursor:pointer;
  padding:.5rem;
  }
button.proyMenu:hover{
  background-color:lightgray;
  width: 75px;
  height: 75px;
}

ul {
  margin: 25px;
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
</style>