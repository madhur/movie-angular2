import { MovieService } from './service/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieContainerComponent } from './components/movie-container/movie-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
