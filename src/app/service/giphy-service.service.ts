import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/environment';
import { GiphyModel} from '../giphy-model/giphy-model.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GiphyService {

  private imageSource = new BehaviorSubject<GiphyModel[]>(null);
  private getImageStill = this.imageSource.asObservable();

  constructor(private http: HttpClient) {
    // this.getImageStills();
  }

  getImageStills(source: string): Observable<GiphyModel[]> {
    const uriReturn = this.http.get<GiphyModel[]>(API_URL + '/' + source);
    return uriReturn;
  }

  searchAllImageStills(searchTerms: string): Observable<GiphyModel[]> {
    const uriReturn = this.http.get<GiphyModel[]>(API_URL + '/' + searchTerms);
    return uriReturn;
  }

  // getImageStills() {
  //   const result = this.http.get(API_URL + '/');
  //   result.subscribe(imageArray => this.getImages(imageArray));
  // }

  getImages() {
    return this.getImageStill;
  }

  setNext(uriReturn: Observable<GiphyModel[]>) {
    uriReturn.subscribe(giphyArray => this.imageSource.next(giphyArray));
  }
}
