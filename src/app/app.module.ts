import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GiphyViewComponent } from './giphy-view/giphy-view.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';
import { GiphyService } from './service/giphy-service.service';
import { GiphyComponent } from './giphy/giphy.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GiphyViewComponent,
    GiphySearchComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
