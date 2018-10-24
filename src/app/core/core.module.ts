import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormService}from './form.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
 // exports:[FormService],
  providers:[FormService]
  
})
export class CoreModule { }
