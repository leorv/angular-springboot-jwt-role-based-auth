import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ModalModule,
        HttpClientModule,
        TooltipModule.forRoot()
    ],
    providers: [
        BsModalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
