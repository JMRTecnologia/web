import { Injectable } from '@angular/core';
import { storage } from '../utils/storage';

let email = "E-EL";
let data = "D-DT";

@Injectable({
    providedIn: 'root'
})

export class StorageService {


    salvarEmail(email: string) {
        storage.setEncripted(email, email);
    }

    salvarData(dataEnviada: Date) {
        storage.setEncripted(data, dataEnviada.toDateString())
    }

    buscarEmail(): string {
        return storage.getEncripted(email);
    }

    buscarData(): string {
        return storage.getEncripted(data);
    }

}