import { LetterReader } from "./Classes/LetterReader";

const letter: string = 'wii playstation _xbox-360 Minecraft Minecraft _Minecraft';
const letterReader: LetterReader = new LetterReader();
const countedGifts = letterReader.read(letter);


console.log(Object.keys(countedGifts).length > 0 ? countedGifts : '¡La carta no contenía regalos para añadir!');