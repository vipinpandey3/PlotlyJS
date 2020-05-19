import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [3, 7, 4], type:'', mode:'lines+points', marker: {color: 'green'} },
        // {type: 'bar'}
    ],
    layout: {width: 1000, height: 240, title: 'A Fancy Plot'}
  };
}
