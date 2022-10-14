export class Utente {
    idUtente: number;
    nome: string;
    cognome: string;
    email: string;
    password: string;
    dataDiNascita: Date;
    paeseDiNascita: string;
    partitaIva: string;
    azienda: number;
    codiceFiscale: string;

    constructor(idUtente: number, nome: string, cognome: string, email: string, password: string, dataDiNascita: Date, paeseDiNascita: string, partitaIva: string, azienda: number, codiceFiscale: string) {
        this.idUtente = idUtente;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.dataDiNascita = dataDiNascita;
        this.paeseDiNascita = paeseDiNascita;
        this.partitaIva = partitaIva;
        this.azienda = azienda;
        this.codiceFiscale = codiceFiscale;
    }

    get idUtenti(): number {
        return this.idUtente;
    }
    set idUtenti(idUtenti: number) {
        this.idUtenti = idUtenti;
    }

    get nomeUtenti(): string {
        return this.nome;
    }
    set nomeUtenti(nome: string) {
        this.nome = nome;
    }

    get cognomeUtenti(): string {
        return this.cognome;
    }
    set cognomeUtenti(cognome: string) {
        this.cognome = cognome;
    }

    get emailUtenti(): string {
        return this.email;
    }
    set emailUtenti(email: string) {
        this.email = email;
    }
    
    get passwordUtenti(): string {
        return this.password;
    }
    set passwordUtenti(password: string) {
        this.password = password;
    }

    get dataDiNascitaUtenti(): Date {
        return this.dataDiNascita;
    }
    set dataDiNascitaUtenti(dataDiNascita: Date) {
        this.dataDiNascita = dataDiNascita;
    }

    get paeseDiNascitaUtenti(): string {
        return this.paeseDiNascita;
    }
    set paeseDiNascitaUtenti(paeseDiNascita: string) {
        this.paeseDiNascita = paeseDiNascita;
    }

    get partitaIvaUtenti(): string {
        return this.partitaIva;
    }
    set partitaIvaUtenti(partitaIva: string) {
        this.partitaIva = partitaIva;
    }

    get aziendaUtenti(): number {
        return this.azienda;
    }
    set aziendaUtenti(azienda: number) {
        this.azienda = azienda;
    }

    get codiceFiscaleUtenti(): string {
        return this.codiceFiscale;
    }
    set codiceFiscaleUtenti(codiceFiscale: string) {
        this.codiceFiscale = codiceFiscale;
    }
}
