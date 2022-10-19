export class Utente {
    nome: string;
    cognome?: string;
    email: string;
    password?: string;
    dataDiNascita?: Date;
    paeseDiNascita?: string;
    azienda?: boolean;
    codiceFiscale?: string;

    
    
    constructor(utente:any){
        this.nome=utente.get('nome').value 
        this.cognome=utente.get('cognome').value                
        this.email=utente.get('email').value         
        this.password=utente.get('password').value        
        this.dataDiNascita=utente.get('data_di_nascita').value         
        this.paeseDiNascita=utente.get('paese_di_nascita').value         
        this.codiceFiscale=utente.get('codice_fiscale').value
       
    }
    
    
    
}

