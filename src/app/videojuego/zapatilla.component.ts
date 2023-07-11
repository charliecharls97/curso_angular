import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatilla.component.html'
})

export class ZapatillaComponent implements OnInit{
    public titulo: string;
    public listado: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public marca_tw: string;

    constructor(){
        this.titulo = "Componente de Zapatilla";
        this.listado = "Listado de Zapatillas mas populares";
        this.zapatillas = [
            new Zapatilla("Adidas", "A001", "negro", 200, true),
            new Zapatilla("Reebock", "R001", "rojo", 100, false),
            new Zapatilla("Adidas", "A002", "blanco", 320, true),
            new Zapatilla("Gucci", "G001", "morado", 500, true),
            new Zapatilla("Nike", "N001", "verde", 600, true)
        ]
        this.marcas = [];
        //this.marcas = new Array();
        this.color = "yellow";
        this.marca_tw = "";
       
        
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(): void {
        this.zapatillas.forEach((zap, index) => {
            if(this.marcas.indexOf(zap.marca) < 0)
                this.marcas.push(zap.marca);
        });

        console.log(this.marcas);
    }

    getMarca(): void{
        alert("La marca es: " + this.marca_tw);
    }

    addMarca(): void{
        this.marcas.push(this.marca_tw);
    }

    borrarMarca(indice: any){ //verificar el tipo de dato del parametro/cambiar a number
        alert(typeof indice);
        this.marcas.splice(indice, 1);
        
    }

    onBlur(): void{
        alert("has salido del input");
    }

    mostrarMarca(){
        alert(this.color);
    }
}