export class Libro {

    constructor(public id?: number,
        public titolo?: string,
        public pagine?: number,
        public autore?: string,
        public dataPubblicazione?: Date,
        public premiato: boolean = false) {

    }
}
