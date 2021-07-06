import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/models/book';
import { Observable } from 'rxjs';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class BookService {

  constructor(private http: HttpClient) { }

  //POST
  // addBook(book: Book){
  //   return this.http.post<Book>(`http://localhost:8080/bookstoreapp/book`, book);
  // }
   //Get all
   fetchAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/bookstoreapp/books');
  }
    fetchBookById(id: number): Observable<Book>{
      return this.http.get<Book>(`http://localhost:8080/bookstoreapp/book/${id}`);
    }
    fetchBookBySearch(keyword:string):Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:8080/bookstoreapp/books/search/${keyword}`)
    }


}
