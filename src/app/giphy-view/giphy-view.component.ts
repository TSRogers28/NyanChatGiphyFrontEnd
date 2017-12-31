import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../service/giphy-service.service';

@Component({
  selector: 'app-giphy-view',
  templateUrl: './giphy-view.component.html',
  styleUrls: ['./giphy-view.component.css']
})
export class GiphyViewComponent implements OnInit {

  constructor(private giphyService: GiphyService) {}

  ngOnInit() {
    this.giphyService.getImageStills();
  }

}
