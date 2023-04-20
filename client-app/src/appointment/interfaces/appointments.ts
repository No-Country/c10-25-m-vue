export interface AppointmentResp {
  status: string;
  appointments: Appointment[];
}

export interface Appointment {
  id: number;
  date: Date;
  reason: string;
  vet_id: number;
  pet_id: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  pet: Pet;
  vet: Vet;
}

export interface Pet {
  id: number;
  name: string;
  petImage: string;
  animal_id: number;
  user_id: number;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Vet {
  id: number;
  speciality: string;
  user_id: number;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  user: User;
}

export interface User {
  name: string;
  surname: string;
  email: string;
  phone: string;
}
