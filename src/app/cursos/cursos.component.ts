import { Component, OnInit } from '@angular/core';
//importar modulos del router para manejar parametros de la url
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
    public nom_param: string;
    public num_param: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.nom_param = "";
    this.num_param = 0;
  }

  ngOnInit(): void {
    this._route.params.subscribe((param: Params): void => {
      this.nom_param = param['nombre'];
      this.num_param = +param['numero'];
      console.log('CursosComponent - console: ' + this.nom_param);
    });
  }

  redirigir(): void {
    this._router.navigate(['/zapatillas']);
  }

}
