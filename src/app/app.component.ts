import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    public title: string;
    public descripcion: string;
    public textButton: string;
    public mostrar_videojuego: boolean;
    public config;
   

    constructor(){
        this.config =  Configuracion;

        this.title = this.config.title;
        this.descripcion = this.config.descripcion;
        
        this.mostrar_videojuego = true;
        this.textButton = "Ocultar videojuego";
        
    }

    ocultarVideojuego(){
        this.mostrar_videojuego = !this.mostrar_videojuego;
        if(this.mostrar_videojuego){
            this.textButton = "Ocultar videojuego";
        }else{
            this.textButton = "Mostrar videojuego";
        }
    }
  
}
