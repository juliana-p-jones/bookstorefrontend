import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/models/book';
import { Category } from 'src/models/category';
import { BookService } from 'src/services/book.service';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  book = new Book();
  category = new Category();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private bookService: BookService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
  this.bookService.fetchBookById(id).subscribe(
    response => {
      this.book = response;
    },
    error => console.log(error)
  );
  }
  
  backButton() {
    this.router.navigate(['app-book-list'])
  }
  getCategoryName(id: number){
    console.log("test1");
  this.categoryService.fetchCategoryById(id).subscribe(
    response => {
      this.category = response;
    },
    error => console.log(error)
  );
  console.log("test");
  return this.category.name;
}

}
