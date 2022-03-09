import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatriceComponent } from './composants/CalculatriceFolder/calculatrice.component';
import { CatalogueProductComponent } from './composants/CatalogueProduit/catalogue/catalogue-product.component';
import { ProductsComponent } from './composants/CatalogueProduit/products/products.component';
import { ListStudentComponent } from './composants/list-student/list-student.component';
import { CatalogComponentComponent } from './composants/Directive/catalog-component.component';
import { LoginComponent } from './composants/login/login.component';
import { PipeComponentComponent } from './composants/pipeComponent/catalg-component.component';
import { FormComponent } from './composants/form/form.component';
import { PercentagePipe } from './Pipe/percentage.pipe';
import { TruncatePipe } from './Pipe/truncate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeteoComponentComponent } from './composants/meteo-component/meteo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponent,
    CatalogueProductComponent,
    ProductsComponent,
    ListStudentComponent,
    CatalogComponentComponent,
    LoginComponent,
    PipeComponentComponent,
    FormComponent,
    PercentagePipe,
    TruncatePipe,
    MeteoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
