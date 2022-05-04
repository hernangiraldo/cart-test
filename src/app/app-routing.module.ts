import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '@commons/const/app-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: appRoutes.products,
    pathMatch: 'full'
  },
  {
    path: appRoutes.products,
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: appRoutes.cart,
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
