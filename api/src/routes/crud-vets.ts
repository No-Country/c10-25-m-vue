import prisma from '../prismaClient'

//getVeterinarios

async function getVets() {
  return await prisma.veterinarian.findMany()
};


//getVeterinario

async function getVet(id: number) {
  return await prisma.vet.findUnique({
    where: { id }
  })
};

//createVeterinario

async function createVet(data:any){
    return await prisma.vet.create({data})
};

//updateVeterinario

async function updateVet(id: number, data:any){
    return await prisma.vet.update({
        where: {id},
        data
    })
};

//deleteVeterinario

async function deleteVet(id:number){
    return await prisma.vet.delete({
        where: {id},
    })
};

export {getVets,getVet,createVet,updateVet,deleteVet}