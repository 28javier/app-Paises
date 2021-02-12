import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {


  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(private PaisService: PaisService) { }

  activarRegion(region: string){
    if (region === this.regionActiva) { return}
    this.regionActiva = region;
    this.paises = [];
    this.PaisService.buscarRegion(region).subscribe(
        paises => {
          // console.log(paises);
          this.paises = paises;
        }
    )
  }
 
  getClassCss(region: string){
    return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
