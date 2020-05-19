import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import * as PlotlyJS from 'plotly.js/dist/plotly.js';
// import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyViaWindowModule } from 'angular-plotly.js';
import { FramesComponent } from './frames/frames.component';
import { AjaxChartComponent } from './ajax-chart/ajax-chart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FramesComponent,
    AjaxChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PlotlyModule
    PlotlyViaWindowModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
