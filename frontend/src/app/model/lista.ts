export class Lista {
    img: string;
    testo: string;

    constructor(img: string, testo: string) {
        this.img = img;
        this.testo = testo;
    }

    get imgLista(): string {
        return this.img;
    }
    set imgLista(img: string) {
        this.img = img;
    }

    get testoLista(): string {
        return this.testo;
    }
    set testoLista(testo: string) {
        this.testo = testo;
    }
}