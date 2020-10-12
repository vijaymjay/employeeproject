import { NgModule }      from '@angular/core';
import { CustomMaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        CustomMaterialModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ],
    declarations: [
        AppComponent,
     ],
    bootstrap: [AppComponent]
})

export class AppModule { }