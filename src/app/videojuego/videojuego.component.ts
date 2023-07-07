import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    template:
        `
        <h2>Componente de Videojuego</h2>
        <ul>
            <li>GTA V</li>
            <li>RE 4</li>
            <li>VICE CITY</li>
            <li>FIFA</li>
        </ul>
        `
})

export class VideojuegoComponent {
    constructor(){
        console.log('Se ha cargado el componente: videojuego.component.ts');
    }

}
