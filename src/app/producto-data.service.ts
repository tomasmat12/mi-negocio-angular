import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from './productos-lista/producto';

const URL = "http://localhost:3000/productos";

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<producto[]> {
    return this.http.get<producto[]>(URL);
  
  }
}
