import { UserRole } from '.prisma/client';
import bcrypt from 'bcrypt';

import { db } from './../database/db.server';

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: string;
  profileImageUrl: string;
  role: UserRole;
};

type Vet = {
  speciality: string;
  user_id: number;
};

type Animal = {
  name: string;
  image: string
};

type Pet = {
  name: string;
  animal_id: number;
  user_id: number;
  petImage: string
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
  const password = 'Pass123456*';

  const hashedPassword = bcrypt.hashSync(password, 10);

  return [
    {
      name: 'jhon',
      surname: 'doe',
      email: 'jhondoe@gmail.com',
      phone: '+51 111 1111',
      password: hashedPassword,
      role: UserRole.admin,
      profileImageUrl:'users/1681795826528-subject_1.png',
    },
    {
      name: 'juan',
      surname: 'morales',
      email: 'juanmorales@gmail.com',
      phone: '+52 222 2222',
      password: hashedPassword,
      role: UserRole.user,
      profileImageUrl:'users/1681796125395-subject_2.png',
    },
    {
      name: 'sofia',
      surname: 'bessonart',
      email: 'sofia@gmail.com',
      phone: '+53 333 3333',
      password: hashedPassword,
      role: UserRole.vet,
      profileImageUrl:'users/1681796384350-subject_4.png',
    },
    {
      name: 'yamila',
      surname: 'quiroga',
      email: 'yamiquiroga@gmail.com',
      phone: '+54 444 4444',
      password: hashedPassword,
      role: UserRole.vet,
      profileImageUrl:'users/1681796400656-subject_5.png',
    },
    {
      name: 'ailin',
      surname: 'castillo',
      email: 'ailincastillo@gmail.com',
      phone: '+55 555 5555',
      password: hashedPassword,
      role: UserRole.vet,
      profileImageUrl:'users/1681796421157-subject_6.png',
    },
    {
      name: 'gabriel',
      surname: 'jalil',
      email: 'jalu@gmail.com',
      phone: '+56 666 6666',
      password: hashedPassword,
      role: UserRole.vet,
      profileImageUrl:'users/1681795826528-subject_1.png',
    },
    {
      name: 'luis',
      surname: 'avendaño',
      email: 'luis@gmail.com',
      phone: '+57 777 7777',
      password: hashedPassword,
      role: UserRole.user,
      profileImageUrl:'users/1681796204015-subject_3.png',
    },
  ];
}

function getVet(): Array<Vet> {
  return [
    {
      speciality: 'animales pequeños',
      user_id: 3,
    },
    {
      speciality: 'animales grandes',
      user_id: 4,
    },
    {
      speciality: 'fauna silvestre',
      user_id: 5,
    },
    {
      speciality: 'animales exoticos',
      user_id: 6,
    },
  ];
}

function getAnimals(): Array<Animal> {
  return [
    {
      name: 'Perro',
      image:'animal/1681788237730-dog-pet.png',
    },
    {
      name: 'Gato',
      image:'animal/1681788304928-cat-pet.png',
    },
    {
      name: 'Conejo',
      image:'animal/1681788357441-rabbit-pet.png',
    },
    {
      name: 'Pájaro',
      image:'animal/1681788438581-deco-pets.png',
    },
  ];
}

function getPets(): Array<Pet> {
  return [
    {
      name: 'Fido',
      petImage:'pet/1681797173399-Fido.jpg',
      animal_id: 1,
      user_id: 7,
    },
    {
      name: 'Garfield',
      petImage:'pet/1681797209042-garfield.jpeg',
      animal_id: 2,
      user_id: 2,
    },
    {
      name: 'Bugs',
      petImage:'pet/1681797276680-bugs.jpg',
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
          phone: user.phone,
          password: user.password,
          profileImageUrl: user.profileImageUrl,
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
