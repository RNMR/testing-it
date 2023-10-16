import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateComponent } from './private.component';
@NgModule({
  declarations: [
    LoginComponent,
    PrivateComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    // SharedModule,
    ReactiveFormsModule,
  ],
})
export class PrivateModule { }
