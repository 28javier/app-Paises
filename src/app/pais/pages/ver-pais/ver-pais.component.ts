import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import {switchMap, tap} from 'rxjs/operators'
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: Pais;

  constructor(private activateRoute: ActivatedRoute,
                private paisService: PaisService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap((param ) => this.paisService.buscarPaisPorCodigo(param.id)),
      tap(console.log)
    )
    .subscribe( pais => {
      // console.log(pais);
      this.pais = pais;
    });

  //   this.activateRoute.params
  //   .subscribe( ({id}) => {
  //       console.log(id);
  //       this.paisService.buscarPaisPorCodigo(id)
  //       .subscribe( pais => {
  //             console.log(pais);
  //       })
  //     });
  }

}
