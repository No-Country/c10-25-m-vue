import { UserRole } from '.prisma/client';
import bcrypt from 'bcrypt';

import { db } from './../database/db.server';

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: UserRole;
};

type Vet = {
  phone: string;
  speciality: string;
  user_id: number;
};

type Animal = {
  name: string;
};

type Pet = {
  name: string;
  animal_id: number;
  user_id: number;
};

type Review = {
  comment: string;
  score: number;
  vet_id: number;
  user_id: number;
};

type Appointment = {
  date: Date;
  reason: string;
  vet_id: number;
  pet_id: number;
};

function getUser(): Array<User> {
  const password = 'pass123456';

  const hashedPassword = bcrypt.hashSync(password, 10);

  return [
    {
      name: 'jhon',
      surname: 'doe',
      email: 'jhondoe@gmail.com',
      password: hashedPassword,
      role: UserRole.admin,
    },
    {
      name: 'juan',
      surname: 'morales',
      email: 'juanmorales@gmail.com',
      password: hashedPassword,
      role: UserRole.user,
    },
    {
      name: 'sofia',
      surname: 'bessonart',
      email: 'sofia@gmail.com',
      password: hashedPassword,
      role: UserRole.vet,
    },
    {
      name: 'ricardo',
      surname: 'jimenes',
      email: 'ricardo@gmail.com',
      password: hashedPassword,
      role: UserRole.vet,
    },
    {
      name: 'melina',
      surname: 'villalba',
      email: 'velinavillalba@gmail.com',
      password: hashedPassword,
      role: UserRole.vet,
    },
    {
      name: 'gabriel',
      surname: 'jalil',
      email: 'jalu@gmail.com',
      password: hashedPassword,
      role: UserRole.vet,
    },
    {
      name: 'luis',
      surname: 'avendaño',
      email: 'luis@gmail.com',
      password: hashedPassword,
      role: UserRole.user,
    },
  ];
}

function getVet(): Array<Vet> {
  return [
    {
      phone: '+52 111 111 111',
      speciality: 'animales pequeños',
      user_id: 3,
    },
    {
      phone: '+52 222 222 222',
      speciality: 'animales grandes',
      user_id: 4,
    },
    {
      phone: '+52 333 333 333',
      speciality: 'fauna silvestre',
      user_id: 5,
    },
    {
      phone: '+52 444 444 444',
      speciality: 'animales exoticos',
      user_id: 6,
    },
  ];
}

function getAnimals(): Array<Animal> {
  return [
    {
      name: 'Perro',
    },
    {
      name: 'Gato',
    },
    {
      name: 'Conejo',
    },
    {
      name: 'Pájaro',
    },
  ];
}

function getPets(): Array<Pet> {
  return [
    {
      name: 'Fido',
      animal_id: 1,
      user_id: 7,
    },
    {
      name: 'Garfield',
      animal_id: 2,
      user_id: 2,
    },
    {
      name: 'Bugs',
      animal_id: 3,
      user_id: 2,
    },
  ];
}

function getReviews(): Array<Review> {
  return [
    {
      comment: '¡Excelente atención! Muy contento con el servicio.',
      score: 5,
      vet_id: 1,
      user_id: 2,
    },
    {
      comment: 'Muy recomendado, el veterinario fue muy amable y profesional.',
      score: 4,
      vet_id: 2,
      user_id: 7,
    },
    {
      comment: 'No quedé muy satisfecho con la atención recibida.',
      score: 2,
      vet_id: 3,
      user_id: 2,
    },
    {
      comment: '¡Muy buen servicio y atención! Definitivamente volvería.',
      score: 5,
      vet_id: 4,
      user_id: 7,
    },
  ];
}

function getAppointment(): Array<Appointment> {
  return [
    {
      date: new Date('2023-04-05T10:30:00Z'),
      reason: 'Chequeo anual de mascota',
      vet_id: 1,
      pet_id: 1,
    },
    {
      date: new Date('2023-04-12T14:15:00Z'),
      reason: 'Vacunación contra la rabia',
      vet_id: 2,
      pet_id: 2,
    },
    {
      date: new Date('2023-04-20T09:00:00Z'),
      reason: 'Dolor en la pata',
      vet_id: 3,
      pet_id: 3,
    },
    {
      date: new Date('2023-04-27T16:45:00Z'),
      reason: 'Revisión de cirugía',
      vet_id: 4,
      pet_id: 1,
    },
    {
      date: new Date('2023-05-05T11:30:00Z'),
      reason: 'Control de peso',
      vet_id: 1,
      pet_id: 2,
    },
    {
      date: new Date('2023-05-12T15:15:00Z'),
      reason: 'Problemas digestivos',
      vet_id: 2,
      pet_id: 3,
    },
    {
      date: new Date('2023-05-18T10:00:00Z'),
      reason: 'Corte de pelo',
      vet_id: 3,
      pet_id: 1,
    },
    {
      date: new Date('2023-05-25T17:45:00Z'),
      reason: 'Revisión de oídos',
      vet_id: 4,
      pet_id: 2,
    },
    {
      date: new Date('2023-06-02T12:30:00Z'),
      reason: 'Desparasitación',
      vet_id: 1,
      pet_id: 3,
    },
    {
      date: new Date('2023-06-09T16:15:00Z'),
      reason: 'Extracción de dientes',
      vet_id: 2,
      pet_id: 1,
    },
  ];
}

async function seed() {
  await Promise.all(
    getUser().map((user) => {
      return db.user.create({
        data: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          password: user.password,
          role: user.role,
        },
      });
    }),
  );

  await Promise.all(
    getVet().map((vet) => {
      return db.vet.create({
        data: vet,
      });
    }),
  );

  await Promise.all(
    getAnimals().map((animal) => {
      return db.animal.create({
        data: animal,
      });
    }),
  );

  await Promise.all(
    getPets().map((pets) => {
      return db.pet.create({
        data: pets,
      });
    }),
  );

  await Promise.all(
    getReviews().map((review) => {
      return db.review.create({
        data: review,
      });
    }),
  );

  await Promise.all(
    getAppointment().map((appointment) => {
      return db.appointment.create({
        data: appointment,
      });
    }),
  );
}

seed();
