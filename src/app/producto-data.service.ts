import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { producto } from './productos-lista/producto';

const URL = environment.apiUrl + 'productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<producto[]> {
    return this.http.get<producto[]>(URL);
  
    
  }
}
