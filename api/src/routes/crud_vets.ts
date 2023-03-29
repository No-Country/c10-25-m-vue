import prisma from "../prismaclient";

//get veterinarios

async function getVets(){
    return await prisma.vets.findMany()
};

//get veterinario

async function getVet(id:number){
    return await prisma.vet.findUnique({
        where:{id}
    })
};

//create veterinario

async function createVet(vet:any){
    return await prisma.vet.create({
        data:vet
    })
};

//update veterinario

async function updateVet(id:number, data:any){
    return await prisma.vet.update({
        where:{id},
        data
    })
};

//delete veterinario

async function deleteVet(id:number){
    return await prisma.vet.delete({
        where:{id}
    })
};

export default {getVets,getVet,createVet,updateVet,deleteVet};

