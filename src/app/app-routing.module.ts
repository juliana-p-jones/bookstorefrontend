import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

const routes: Routes = [
  {path: 'app-search-result/:keyword', component: SearchResultComponent},
  {path:'app-book-details/:id', component: BookDetailsComponent},
  {path: 'app-book-list', component: BookListComponent},
  {path: '**', redirectTo: 'app-book-list', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
