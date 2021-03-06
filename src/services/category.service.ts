import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

//  Get all
 fetchAllCategories(): Observable<Category[]>{
  return this.http.get<Category[]>('http://localhost:8080/categories');
}
  //Get Project by ID
  fetchCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(`http://localhost:8080/category/${id}`);
  }
}