import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Book[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) { }

  ngOnInit() {
    this.bookService.fetchAllBooks().subscribe(data => {
      this.books = data;
    });
  }
 viewBook(id: number){
   this.router.navigate(['app-book-details', id]);
 }
}
