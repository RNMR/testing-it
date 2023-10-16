import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    // ...canActivate( () =>redirectUnauthorizedTo(['/ingresar']) ),
  },
  { path: 'login', component: LoginComponent,
    ...canActivate( () => redirectLoggedInTo(['/']) )
  },
  { path: 'reiniciar', component: RecoverComponent },
  { 
    path: 'perfil', 
    loadChildren: () => import('./features/private/private.module').then(m => m.PrivateModule), 
    ...canActivate( () =>redirectUnauthorizedTo(['/ingresar']) ),
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
