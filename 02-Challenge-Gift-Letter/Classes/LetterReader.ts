export class LetterReader {

    constructor(){}

    read(letter: string): any {
        const words: Array<string> = this.splitLetter(letter);
        const countedGifts = this.createObject(words);
        return countedGifts;
    }

    private splitLetter(letter: string): Array<string> {
        return letter.split(/(\s+)/).filter( function(word: string) { return word.trim().length > 0; } );
    }

    private createObject(words: Array<string>): any {
        let countedGifts: any = {};
        words.map((word: string) => {
            if (!word.startsWith('_')) {
                countedGifts = this.incrementObjectKey(countedGifts, word);
            }
        })
        return countedGifts;
    }

    private incrementObjectKey(object: any, key: string): any {
        if (!object[key]) {
            object[key] = 1;
        } else {
            object[key]++;
        }
        return object;
    }

}