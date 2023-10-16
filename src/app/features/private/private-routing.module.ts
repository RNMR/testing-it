import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: PrivateComponent, children: [
      {
        path: 'login', component: LoginComponent,
      },
      {
        // path: '', component: ProfileComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
