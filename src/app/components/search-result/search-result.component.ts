import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  books!: Book[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) { }

  ngOnInit(): void {
    const keyword = this.route.snapshot.params[`keyword`];
  this.bookService.fetchBookBySearch(keyword).subscribe( data => {
      this.books = data;
    },
    error => console.log(error)
  );
  }

 viewBook(id: number){
   this.router.navigate(['app-book-details', id]);
 }
 backButton() {
  this.router.navigate(['app-book-list'])
}

collapseTable(){
  // var x = document.getElementById("tableCells");
  var bookTable = document.getElementById('table') as HTMLTableElement;
  var numRows = bookTable.rows.length;
  if (numRows > 1) {
    bookTable!.style.display = "block";
    document.getElementById("notFound")!.innerHTML = "";
  } else {
    bookTable!.style.display = "none";
    document.getElementById("notFound")!.innerHTML = "Sorry! Search result not found ;(";
  }
}

}
