import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './pages/products/products.module';
import { Http, HttpService } from '@utils/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule
  ],
  providers: [
    {
      provide: Http,
      useClass: HttpService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
