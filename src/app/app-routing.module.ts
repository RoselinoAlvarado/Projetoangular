import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsjaguarComponent } from './gifsjaguar/gifsjaguar.component';
import { BuscagifComponent } from './buscagif/buscagif.component';

const routes: Routes = [
	{ path: '', component: BuscagifComponent },
	{ path: 'resultados/:q', component: GifsjaguarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }