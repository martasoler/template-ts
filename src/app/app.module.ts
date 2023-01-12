import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { ClocksComponent } from './components/clocks/clocks.component';
import { AddClockComponent } from './components/add-clock/add-clock.component';
 
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ClocksComponent,
    AddClockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
