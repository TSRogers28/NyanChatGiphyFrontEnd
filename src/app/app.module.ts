import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GiphyViewComponent } from './giphy-view/giphy-view.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';


@NgModule({
  declarations: [
    AppComponent,
    GiphyViewComponent,
    GiphySearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
