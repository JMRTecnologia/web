import { HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class BaseService {

    endPoint;

    constructor(controller: string) {
        this.endPoint = environment.apiUrl + controller;
    }

}


