import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';

/****** Material Angular ******/
import { MyMaterialModule } from '@shared/material/material.module';
// import { HeaderComponent } from './components/header/header.component';

const MODULES = [
  CommonModule,
  // RouterModule,
  MyMaterialModule,
];

const COMPONENTS: any = [
  // HeaderComponent,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  providers: [
     { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  declarations: [...COMPONENTS,],
  entryComponents: []
})
export class SharedModule {}
