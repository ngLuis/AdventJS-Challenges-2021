import { SheepModel } from "../Models/SheepModel";

export class SheepManufacturingChain {

    color: string;
    allowedKeyWords: Array<string>;

    constructor(color: string = 'Roja', allowedKeyWords: Array<string> = ['n', 'a']){
        this.color = color;
        this.allowedKeyWords = allowedKeyWords;
    }

    filterSheeps(sheeps: Array<SheepModel>) {
        let filteredSheeps = [];

        filteredSheeps = this.filterSheepByColor(sheeps);
        filteredSheeps = this.filterSheepByKeyWord(filteredSheeps);

        return filteredSheeps;
    }

    filterSheepByColor(sheeps: Array<SheepModel>) {
        return sheeps.filter( sheep => sheep.color.toLowerCase() === this.color.toLowerCase());
    }

    filterSheepByKeyWord(sheeps: Array<SheepModel>) {
        return sheeps.filter( sheep => this.nameContainsKeywords(sheep.name));
    }

    nameContainsKeywords(name: string) {
        let nameContainsAllKeywords = true;

        this.allowedKeyWords.map( allowedKeyWord => {
            if (!name.toLowerCase().includes(allowedKeyWord.toLowerCase())) {
                nameContainsAllKeywords = false;
            }
        });

        return nameContainsAllKeywords;
    }

}