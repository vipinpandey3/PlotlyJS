import { Component } from '@angular/core';
import * as  data from './data.json';
import * as  layout from './layout.json';
import * as  frames from './fames.json'

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent {

  public lookup: any = {};
    public debug = false;
    public useResizeHandler = true;

    public layout = layout;
    public data = data;
    public config = { showSendToCloud: true };
    public frames = frames;

    constructor() { }

}
