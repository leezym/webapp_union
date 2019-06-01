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
        <b-col cols="3">
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
        <b-col cols="6">
          <b-form>
            <p class ="Subtitulo">Cargar imágen y diagrama de contexto</p>
            <br><p class = "ing"> Imágen:</p>
            <b-form-file browse-text="Examinar..."></b-form-file>
            <p class = "ing">Diagrama:</p>
            <b-form-file browse-text="Examinar..."></b-form-file>
            <b-button class="subm" block variant="primary" type="submit">Cargar</b-button>
          </b-form>
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
      nombreProyecto : "Proyecto 1  "
    }
  }
}
</script>

<style scoped>

.subm{
  margin-top:30px;
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
</style>