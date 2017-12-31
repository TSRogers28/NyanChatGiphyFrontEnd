import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/environment';
import { GiphyModelModule } from '../giphy-model/giphy-model.module';

@Injectable()
export class GiphyService {

  constructor(private http: HttpClient) {
    this.getImageStills();
  }

  getImageStills() {
    const result = this.http.get(API_URL + '/');
    result.subscribe(m => console.log(m));
  }

}
