//importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillaComponent } from './videojuego/zapatilla.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

//configurando rutas

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'videojuego', component: VideojuegoComponent },
    { path: 'zapatillas', component: ZapatillaComponent },
    { path: 'cursos', component: CursosComponent },
    { path: '**', component: HomeComponent } // Wildcard route for a 404 page

];

// exportar el servicio y modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
