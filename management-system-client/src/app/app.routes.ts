import { Routes } from '@angular/router';
import { IndexComponent } from './view/lyate/index/index.component';
import { ManegerMedicoComponent } from './view/componentes/maneger-medico/maneger-medico.component';
import { ManegerPacienteComponent } from './view/componentes/maneger-paciente/maneger-paciente.component';

export const routes: Routes = [
    { path: "", component: IndexComponent, children: [
        {path:"manegar-medico",component: ManegerMedicoComponent, },
        {path:"manegar-paciente",component: ManegerPacienteComponent, }
     ] }

];
