import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormModule }from './form/form.module'

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
