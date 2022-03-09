import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatriceComponent } from './composants/CalculatriceFolder/calculatrice.component';
import { CatalogueProductComponent } from './composants/CatalogueProduit/catalogue/catalogue-product.component';
import { CatalogComponentComponent } from './composants/Directive/catalog-component.component';
import { FormComponent } from './composants/form/form.component';
import { ListStudentComponent } from './composants/list-student/list-student.component';
import { LoginComponent } from './composants/login/login.component';
import { MeteoComponentComponent } from './composants/meteo-component/meteo-component.component';
import { PipeComponentComponent } from './composants/pipeComponent/catalg-component.component';

const appRoutes: Routes = [
  {
    path: 'calculatrice',
    component: CalculatriceComponent
  },
  {
    path: 'catalogue',
    component: CatalogueProductComponent
  },
  {
    path: 'test-composant',
    component: ListStudentComponent
  },
  {
    path: 'directive',
    component: CatalogComponentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pipe',
    component: PipeComponentComponent
  },
  {
    path: 'reactive-form',
    component: FormComponent
  },
  {
    path: 'meteo',
    component: MeteoComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
