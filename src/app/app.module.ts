import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookService } from 'src/services/book.service';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { YesNoPipe } from './yes-no.pipe';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';



@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookListComponent,
    YesNoPipe,
    SearchbarComponent,
    SearchResultComponent

  ],
  imports: [
    RouterModule.forRoot([
      // {path: 'app-search-result', component: SearchResultComponent},
      // {path: 'app-book-list', component: BookListComponent},
      // {path: 'app-book-details', component: BookDetailsComponent},
      // {path: '', redirectTo: 'app-book-list', pathMatch: 'full'},

    ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
