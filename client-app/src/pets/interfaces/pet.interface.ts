export interface RespPet {
  status: string;
  results: number;
  pets: Pet[];
}

export interface Pet {
  id: number;
  name: string;
  petImage: string;
  animal: AnimalPet;
  status: boolean;
}

export interface AnimalPet {
  id: number;
  name: string;
}
