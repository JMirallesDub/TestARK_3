import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { HousesComponent } from './houses/houses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
