import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books:any;
constructor(private http:HttpClient){

  }
  ngOnInit(){
   let response =  this.http.get("http://localhost:7010/findAllBooks");
   response.subscribe((data=> this.books=data));
  }
}
 