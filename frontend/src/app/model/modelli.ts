export class Modelli {
    classe_emissioni: string;
    nome: string;
    potenza_motore: number;
    numero_posti: number;
    numero_porte: number;
    tipo_di_alimentazione: string;
    tipo_di_cambio: string;
    colore: string;

    constructor(modelli:any) {
        this.classe_emissioni=modelli.get('classe_emissioni').value
        this.nome=modelli.get('nome').value
        this.potenza_motore=modelli.get('potenza_motore').value
        this.numero_posti=modelli.get('numero_posti').value
        this.numero_porte=modelli.get('numero_porte').value
        this.tipo_di_alimentazione=modelli.get('tipo_di_alimentazione').value
        this.tipo_di_cambio=modelli.get('tipo_di_cambio').value
        this.colore=modelli.get('colore').value
    }
}