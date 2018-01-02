import {Component, Input, OnInit} from '@angular/core';
import { GiphyModel } from '../giphy-model/giphy-model.model';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  @Input()
  retrievedGiphys;

  constructor() { }

  ngOnInit() {
  }

}
