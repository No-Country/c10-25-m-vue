<template>
  <div class="abstract">
    <SubHeader />
    <ReservationFlow>
      <div class="container-header">
        <div class="header">
          Seleccioná día y hora
        </div>
      </div>
      <div class="professionals-list">
        <div class="calender-selectdate">
          <DatePicker :initial-page="{ month: 4, year: 2023 }" borderless v-model="customer.Selectdate" :masks="masks" />
        </div>

        <div v-if="customer.Selectdate" class="time-conmtainer">
          <div class="time-appointments">
            <div v-for="(time, index) in times" :key="time" class="time" @click="selectTime(index)"
              :class="{ 'selected': index === selectedIndex }">
              <span @click="handleEmitReservationflow">{{ time }}</span>
            </div>
          </div>
        </div>
        <!-- <div>Fecha y hora seleccionadas: {{ formattedDateTime }}</div> -->
      </div>
    </ReservationFlow>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from 'vue';
import SubHeader from '../components/subHeader.vue'
import ReservationFlow from '../components/ReservationFlow.vue';
import { Calendar, DatePicker } from 'v-calendar';
import { useAppointmentStore } from '../../store/appointment';
import 'v-calendar/style.css';
export default defineComponent({
  components: {
    SubHeader,
    ReservationFlow,
    Calendar,
    DatePicker,
  },
  setup(props, { emit }) {
    const SelectDateAppoitmentStore = useAppointmentStore();
    const date = ref();
    const selectedIndex = ref<number>();
    const selectedTime = ref<string>('');

    const selectTime = (index: number) => {
      selectedIndex.value = index;
      selectedTime.value = times[index];
    }
    const customer = reactive({ Selectdate: '' });
    const masks = ref({
      modelValue: 'YYYY-MM-DD',
    });
    const selectedDate = ref(null);
    const formattedDate = computed(() => {
      const date = new Date(customer.Selectdate);
      const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      return `${month} ${day}`;
    });

    const formattedDateTime = computed(() => {
      const date = new Date(customer.Selectdate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day} ${selectedTime.value}:00`;
    });


    const times = ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30']


    const handleEmitReservationflow = () => {
      console.log('Emitting date-selected event with value:', formattedDateTime.value);
      SelectDateAppoitmentStore.setSelectedDate(formattedDateTime.value)
    
    }
    watch(formattedDateTime, (dateTime) => {
      if (dateTime) {

      }
    });

    return { date, times, selectedIndex, selectTime, customer, handleEmitReservationflow, formattedDateTime, masks, selectedDate, formattedDate }
  },
});
</script>
<style scoped lang="scss">
.calender-selectdate .time {
  display: grid;
  margin: 10px;
  gap: 10px;

  width: 100%;
}

.time-appointments {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 11px;
}

.time {
  background: #B6C3F6;
  border-radius: 10px;
  transform: rotate(-0.29deg);
  max-width: max-content;
  padding: 2px 15px 2px 15px;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  cursor: pointer;
  color: #3A57E8;
}

.time:hover {
  background: #5569B7;
  border-radius: 10px;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  /* identical to box height, or 28px */


  color: #FFFFFF;
}

.selected {
  background: #5569B7;
  border-radius: 10px;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  /* identical to box height, or 28px */


  color: #FFFFFF;
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
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  align-items: flex-start;
  align-content: center;

}
</style>