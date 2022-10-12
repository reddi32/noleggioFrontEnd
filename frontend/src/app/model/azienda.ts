export class Azienda {
    img: string;
    testo: string;

    constructor(img: string, testo: string) {
        this.img = img;
        this.testo = testo;
    }

    get imgAzienda(): string {
        return this.img;
    }
    set imgAzienda(img: string) {
        this.img = img;
    }

    get testoAzienda(): string {
        return this.testo;
    }
    set testoAzienda(testo: string) {
        this.testo = testo;
    }
}