import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CustomDirComponent } from './components/custom-dir/custom-dir.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'ngif', component:NgIfComponent},
  {path:'ngfor', component:NgForComponent},
  {path:'ngclass', component:NgClassComponent},
  {path:'ngstyle', component:NgStyleComponent},
  {path:'customdir', component:CustomDirComponent},
  {path:'interpolation', component:InterpolationComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'service', component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// criando um arrya para exportar os componentes
export const OsComponentes = [
  HomeComponent,
  NgIfComponent,
  NgForComponent,
  NgClassComponent,
  NgStyleComponent,
  CustomDirComponent,
  InterpolationComponent,
  FormularioComponent,
  ServiceComponent
]
