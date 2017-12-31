import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GiphyViewComponent } from './giphy-view/giphy-view.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';
import { GiphyService } from './service/giphy-service.service';


@NgModule({
  declarations: [
    AppComponent,
    GiphyViewComponent,
    GiphySearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
