<template>
  <div class="abstract">
    <SubHeader />
    <ReservationFlow>
      <div class="container-header">
        <div class="header">
          Completá los datos de tu mascota
        </div>
      </div>
      <div class="professionals-list">
        <div class="container_interno_form">

          <div class="section-show-pets" v-if="hasPet">
            <div class="column-addPets">
              <h2>Mascotas agregadas </h2>
              <div class="btn-add-pets">
                <button>
                  <img src="../../assets/appoinment_img/add-btn.svg" alt="">
                </button>
                <span class="new-pets-add" style="margin-left:5px;">Nueva mascota</span>
              </div>
            </div>
            <div class="radio-group">
              <input type="radio" id="mascota1" name="mascota" value="1" v-model="selectedPetInputRatio">
              <label for="mascota1">Terry</label>
            </div>
          </div>

          <div class="row " v-else>
            <div class="column">
              <label for="name">Nombre:</label>
              <input type="text" id="name" name="name" placeholder="Escribe tu nombre">
            </div>
            <div class="column">
              <label for="sex">Sexo:</label>
              <div class="" :class="showSexSelect ? 'open-select ' : 'select_options'" @click="toggleSexSelect">
                <span class="selectStatic">{{ selectedSexOption }}</span>
                <img
                  :src="!arrowSex_close ? '../../src/assets/appoinment_img/arrow_baja.svg' : '../../src/assets/appoinment_img/arrow_sube.svg'"
                  alt="">
              </div>
              <ul v-if="showSexSelect" :class="showSexSelect ? 'open-select-ul ' : 'select_options-ul'">
                <li v-for="option in filteredSexOptions" :key="option" @click="selectSexOption(option)">{{ option }}</li>
              </ul>
            </div>
            <div class="column">
              <label for="animal-type">Tipo de animal:</label>
              <div :class="showSelect ? 'open-select ' : 'select_options'" @click="toggleSelect">
                <span class="selectStatic">{{ selectedOption }}</span>
                <img
                  :src="!arrow_close ? '../../src/assets/appoinment_img/arrow_baja.svg' : '../../src/assets/appoinment_img/arrow_sube.svg'"
                  alt="">
              </div>
              <ul v-if="showSelect" :class="showSelect ? 'open-select-ul ' : 'select_options-ul'">
                <li v-for="option in filteredOptions" :key="option" @click="selectOption(option)">{{ option }}</li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="column-full">
              <label for="consulta">Motivo de la consulta:</label>
              <textarea id="consulta" name="consulta" rows="4" cols="50" placeholder="Escriba tu respuesta"></textarea>
            </div>
          </div>
        </div>
      </div>




    </ReservationFlow>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import SubHeader from '../components/subHeader.vue'
import ReservationFlow from '../components/ReservationFlow.vue';
import { useAppointmentStore } from '../../store/appointment';
export default defineComponent({

  components: {
    SubHeader,
    ReservationFlow,
  },

  setup() {
    const storeSearchPets = useAppointmentStore();
    const arrow_close = ref(false);
    const arrowSex_close = ref(false);
    const options = ['Perro', 'Gato', 'Exótico'];
    const filteredOptions = ref(options);
    const selectedOption = ref(options[0]);
    const showSelect = ref(false);
    const hasPet = ref(false);
    const selectedPetInputRatio = ref(1);
    const sexOptions = ['Macho', 'Hembra'];
    const filteredSexOptions = ref(sexOptions);
    const selectedSexOption = ref(sexOptions[0]);
    const showSexSelect = ref(false);

    const toggleSexSelect = () => {
      showSexSelect.value = !showSexSelect.value;
      arrowSex_close.value = !arrowSex_close.value;
      if (showSexSelect.value) {
        filteredSexOptions.value = sexOptions.filter(item => item !== selectedSexOption.value);
      }
    };

    const selectSexOption = (option: string) => {
      selectedSexOption.value = option;
      showSexSelect.value = false;
      arrowSex_close.value = true;
    };

    const toggleSelect = () => {
      showSelect.value = !showSelect.value;
      arrow_close.value = !arrow_close.value;
      if (showSelect.value) {
        filteredOptions.value = options.filter(item => item !== selectedOption.value);
      }
    };

    const selectOption = (option: string) => {
      selectedOption.value = option;
      filteredOptions.value = options.filter(item => item !== option);
      showSelect.value = false;
      arrow_close.value = true;
    };
    return { filteredOptions, storeSearchPets, selectedPetInputRatio, hasPet, arrowSex_close, filteredSexOptions, showSexSelect, selectedSexOption, selectOption, toggleSexSelect, selectSexOption, options, selectedOption, showSelect, toggleSelect, selectOption, arrow_close }

  },
});
</script>
<style scoped lang="scss">
.radio-group {
  display: flex;
  align-items: center;
}

.radio-group label {
  margin-left: 5px;
}

.btn-add-pets {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #3A57E8;

}


.section-show-pets {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.btn-add-pets button {
  cursor: pointer;
}

.open-select {
  border-bottom: none !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;

  box-sizing: border-box;
  margin-top: 6px;
  cursor: pointer;
  background: #EBF1FA;
  border: 3px solid #3A57E8;

  display: flex;
  justify-content: space-between;
}

.new-pets-add:hover {
  cursor: pointer;
  text-decoration: underline;
}

.column-addPets {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 175%;
    /* identical to box height, or 42px */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: #3A57E8;
  }
}

.select_options {
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  cursor: pointer;
  background: #EBF1FA;
  border: 3px solid #3A57E8 !important;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;


}

.container_interno_form {
  width: 83%;

}

.selectStatic {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: left;

  color: rgba(56, 59, 67, 0.76);
}

ul {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: left;

  color: rgba(56, 59, 67, 0.76);
}

.open-select-ul {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: -2px;
  cursor: pointer;
  background: #EBF1FA;
  border-top: none !important;
  border: 3px solid #3A57E8;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 14px;
}

.select_options-ul {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  cursor: pointer;
  background: #EBF1FA;
  border: 3px solid #3A57E8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 14px;
}

.row {
  display: flex;
  gap: 13px;
}

.column {
  flex: 33.33%;
  padding: 5px;
  display: flex;
  flex-direction: column;
}

.column-full {
  flex: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
}

input[type=text] {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  background: #EBF1FA;
  border: 3px solid #3A57E8;
  border-radius: 10px;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  background: #EBF1FA;
  border: 3px solid #3A57E8;
  border-radius: 10px;
}

select {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  background: #EBF1FA;
  border: 3px solid #3A57E8;
  border-radius: 10px;
}

.column {
  flex: 33.33%;
  padding: 5px;
}

.container-date {
  width: 80%;
  margin: 2rem 0 1rem 0;
  display: inline-block;
}

$primary-color: #3A57E8;
$secondary-color: #EBF1FA;
$font-family: 'Jost';

@mixin font-styles($weight, $size) {
  font-family: $font-family;
  font-style: normal;
  font-weight: $weight;
  font-size: $size;
}

%button-styles {
  cursor: pointer;
  border-radius: 10px;
}

.container-header {
  border: 2px solid $primary-color;
  border-radius: 6px 7px 0px 0px;
}

label {
  text-align: left;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #383B43;
}

.header {
  padding: 7px;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  background: $primary-color;
  @include font-styles(500, 22px);
}

.professionals-list {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 306px;
  overflow-y: scroll;
  border: 3px solid $primary-color;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}</style>