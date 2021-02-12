import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer
    }`
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostraSugerencia: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    // console.log(this.termino);
    this.hayError = false;
    this.mostraSugerencia = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      paises => {
        // console.log(paises);
        this.paises = paises;
      }, (err)=> {
        // console.log('Error');
        // console.info(err);
        this.hayError = true;
        this.paises   = [];
      });    
  }
  
  sugerencias(valor: string){
    this.hayError = false;
    this.termino = valor;
    this.mostraSugerencia = true;
    // Todo: crear sugerencias
    this.paisService.buscarPais(valor).subscribe(
      paises => {
        this.paisesSugeridos = paises.splice(0, 6);
      }, error => {
        this.paisesSugeridos = [];
      })
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
