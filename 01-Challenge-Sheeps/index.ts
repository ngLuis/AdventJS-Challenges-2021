import { SheepManufacturingChain } from "./Classes/SheepManufacturingChain";
import { SheepModel } from "./Models/SheepModel";

const colorToFilter: string = 'Blanca';
const allowedKeywords: Array<string> = ['u','L'];

const sheeps: Array<SheepModel> = [
    {name: 'Norman', color: 'Roja'},
    {name: 'Max', color: 'Roja'},
    {name: 'Raymond', color: 'Gris'},
    {name: 'Sophie', color: 'Roja'},
    {name: 'Wilma', color: 'Roja'},
    {name: 'Margaret', color: 'Azul'},
    {name: 'Luna', color: 'Blanca'}
];
const sheepManufacturingChain = new SheepManufacturingChain(colorToFilter, allowedKeywords);

let filteredSheeps = sheepManufacturingChain.filterSheeps(sheeps);

if (filteredSheeps.length > 0) {
    console.log(`Hay ${filteredSheeps.length} oveja${filteredSheeps.length > 1 ? 's' : ''} que ha${filteredSheeps.length > 1 ? 'n' : ''} cumplido los requisitos, ${filteredSheeps.length > 1 ? 'sus nombres son' : 'su nombre es'}: `);
    filteredSheeps.map( sheep => {
        console.log(sheep.name);
    })
} else {
    console.log('No existe ninguna oveja con estas características.')
}


