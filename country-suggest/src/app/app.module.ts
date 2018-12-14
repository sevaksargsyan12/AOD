import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrySuggestComponent } from './country-suggest/country-suggest.component';
import { CountrySuggestService } from './country-suggest/country-suggest.service';

@NgModule({
  declarations: [
    AppComponent,
    CountrySuggestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CountrySuggestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
