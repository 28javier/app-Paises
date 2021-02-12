import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from, Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  @Output()   onEntrer: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  
  debouncer: Subject <string> = new Subject();
  termino:string = '';
  
  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
        // console.log('Debouncer', valor);
        this.onDebounce.emit(valor)
    });
  }
  
  buscar(){
    this.onEntrer.emit(this.termino);
  }

  teclaPrecionada(){
    this.debouncer.next(this.termino);
  }
}
