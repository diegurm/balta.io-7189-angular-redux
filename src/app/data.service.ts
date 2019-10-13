import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {

    public url = 'http://localhost:7189/v1';

    constructor(private http: HttpClient){

    }


    getProducts() {
        return this.http.get(`${this.url}/products`);
    }
}

