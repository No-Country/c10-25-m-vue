<template>
            <div class="container__CreationSuccess">
                <LogoInterno/>
                <div class="container__subtitle">
                <CheckSucess/>
                <h1>¡Creaste tu cuenta con éxito!</h1>
                <p>A continuación, ingresá tu email y contraseña para reservar tu primer turno.</p>
                <div class="container_btn">
                    <button type="submit">Continuar</button>
                    </div>
            </div>
          
        </div>
  
</template>

<script  lang="ts">
import imagenCheckSuccess from "../../assets/auth/AccountCreationSuccess.png";
import LogoInterno from '../../shared/LogoInterno.vue'
import CheckSucess from '../components/svg/CheckSuccess.vue'
import { defineComponent  } from 'vue';

export default defineComponent({
  name: 'AccountCreationSuccess',
  components:{
    LogoInterno,
    CheckSucess
  },
  setup() {


return {
    imagenCheckSuccess 
};
  },
});
</script>

<style lang="scss" scoped>


.container__CreationSuccess{
    
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    height:100%;
    width: 100%;
    align-items:center;
}

.container__subtitle h1
{

font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 46px;

color: #060859;
}

.container__subtitle p {
    font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
text-align: center;
width: 360px;
color: #383B43;
}

.container_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 9px;
}

.container_btn button {
    background-color: #3A57E8;
    color: white;
    font-family: 'Jost', sans-serif;
    border: none;
    padding: 8px 16px;
    gap: 10px;
    height: 62px;
    background: #3A57E8;
    box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    margin-top: 3%;
    cursor: pointer;
    color: #FFFFFF;

}

.container_btn button:hover {
  background: #4f62c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>