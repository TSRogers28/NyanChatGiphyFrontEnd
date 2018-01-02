import {Component, OnInit, ViewChild} from '@angular/core';
import {GiphyService} from '../service/giphy-service.service';
import {GiphyModel} from '../giphy-model/giphy-model.model';
import {GiphyComponent} from '../giphy/giphy.component';

@Component({
  selector: 'app-giphy-view',
  templateUrl: './giphy-view.component.html',
  styleUrls: ['./giphy-view.component.css']
})
export class GiphyViewComponent implements OnInit {

  @ViewChild(GiphyComponent) child;

  giphyArray: GiphyModel[];

  constructor(private giphyService: GiphyService) {}

  displayGiphys() {
    this.giphyService.getImages()
      .subscribe(giphysFound => this.giphyArray = giphysFound, error => console.log('Error: ' + error));
  }

  ngOnInit() {
    this.displayGiphys();
  }

}
