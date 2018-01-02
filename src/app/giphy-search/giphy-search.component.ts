import {Component, Input, OnInit} from '@angular/core';
import {GiphyService} from '../service/giphy-service.service';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css']
})
export class GiphySearchComponent implements OnInit {

  @Input()
  giphySelect = 'gif';

  constructor(private giphyService: GiphyService) { }

  search(search?: string) {
    let observableReturn;
    if (!search) {
      observableReturn = this.giphyService.getImageStills(this.giphySelect);
    }
    else observableReturn = this.giphyService.searchAllImageStills(search);
    observableReturn.subscribe(ret => console.log(ret));
    this.giphyService.setNext(observableReturn);
  }

  ngOnInit() {
  }

}
