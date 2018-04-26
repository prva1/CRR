/* Module like a Package/Wrapper for dependencies belongs to services/providers */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
  ],
  declarations: []
 })
export class ServicesModule { }
