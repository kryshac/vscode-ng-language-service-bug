import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TstModule } from 'tst';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // go to definition from here is working
    TstModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
