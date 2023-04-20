import { useMutation, useQuery } from "@tanstack/vue-query";
import { useAppointmentStore } from "../../store/appointment";
import { ref, computed, watch } from "vue";
import clinicApi from "../../api/clinic-api";
import getConfig from "../../utils/getConfig";
import { storeToRefs } from "pinia";
import { AppointmentResp } from "../interfaces/appointments";

const getMyAppontments = async (status?: string) => {
  const { data } = await clinicApi.get<AppointmentResp>(
    `/appointments/myAppointments`,
    getConfig()
  );

  return data.appointments;
};

const createAppointment = async (dataAppointment: any) => {
  await clinicApi.post("/appointments", dataAppointment, getConfig());
};

const useAppointments = (status?: string, dataAppointment?: any) => {
  const store = useAppointmentStore();
  const { appointments } = storeToRefs(store);

  const { isLoading, data, isError } = useQuery(["appointment", status], () => {
    return getMyAppontments(status);
  });

  const appointmentMutation = useMutation(createAppointment);

  watch(data, (appointments) => {
    if (appointments) store.setAppointments(appointments);
  });

  const addAppointment = async (dataAppointment: any) => {
    try {
      await appointmentMutation.mutateAsync(dataAppointment);
      // Aquí podrías realizar la lógica en caso de éxito, por ejemplo, mostrando un mensaje de confirmación o actualizando la lista de citas.
    } catch (error) {
      // Aquí podrías realizar la lógica en caso de error, por ejemplo, mostrando un mensaje de error o desactivando un botón de guardado.
    }
  };

  return {
    isLoading,
    appointments,
    isError,

    addAppointment,
  };
};

export default useAppointments;
