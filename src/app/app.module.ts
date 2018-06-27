import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { MemberDetailComponent } from './member-detail.component'

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    MemberDetailComponent
  ],
  bootstrap:    [
     AppComponent
  ]
})
export class AppModule { }
