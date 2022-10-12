export class Card { 
    paragrafo: string;
    img: string;
  
    constructor(paragrafo: string, img: string) {
      this.paragrafo = paragrafo;
      this.img = img;
    }
  
    get paragrafoCard(): string {
        return this.paragrafo;
    }
    set paragrafoCard(paragrafo: string) {
        this.paragrafo = paragrafo;
    }

    get imgCard(): string {
        return this.img;
    }
    set imgCard(img: string) {
        this.img = img;
    }
  }
  