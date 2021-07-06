import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
book: Book = new Book();
  constructor( private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) { }

  ngOnInit(): void {
  }

search(){
  const searchWord = document.getElementById("keyword") as HTMLInputElement;
  this.bookService.fetchBookBySearch(searchWord.value);
  this.router.navigate(['app-search-result', searchWord.value]);
}

}
