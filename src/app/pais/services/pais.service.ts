import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  // https://restcountries.eu/rest/v2/name/ecua
  private apiUrl = 'https://restcountries.eu/rest/v2';
  get httpParamas(){
    return new HttpParams().set('fields', 'name;capital;population;borders;alpha2Code;flag');
  }


  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url, {params: this.httpParamas});
  }

  buscarCapital(termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url, {params: this.httpParamas});
  }

  buscarPaisPorCodigo(id: string): Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }

  buscarRegion( region: string): Observable<Pais[]>{
    // https://restcountries.eu/rest/v2/region/europe
    const params = new HttpParams().set('fields', 'name;capital;population;borders;alpha2Code;flag');
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Pais[]>(url, {params: params}).pipe(
      // tap(console.log)
    );
  }
}
