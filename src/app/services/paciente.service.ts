import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private API_PACIESTES = 'http://localhost:35565/api/Personas/1';

  constructor( private http:HttpClient ) { }

  public getParcientes(): Observable<any>{
    return this.http.get(this.API_PACIESTES)
  }
}
