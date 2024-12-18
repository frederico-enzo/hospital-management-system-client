import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './view/lyate/index/index.component';
import { ManegerMedicoComponent } from './view/componentes/maneger-medico/maneger-medico.component';
import { ManegerPacienteComponent } from './view/componentes/maneger-paciente/maneger-paciente.component';
import { NgModule } from '@angular/core';
import { ManegerHomeComponent } from './view/componentes/maneger-home/maneger-home.component';
import { LoginComponent } from './view/system/login/login.component';

export const routes: Routes = [

    { path: "login", component: LoginComponent},
    { path: "", component: IndexComponent, children: [
        {path:"",component: ManegerHomeComponent, },
        {path:"maneger-medico",component: ManegerMedicoComponent, },
        {path:"maneger-paciente",component: ManegerPacienteComponent, }
     ] }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }