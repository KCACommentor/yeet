import { Component, OnInit } from '@angular/core';

interface Book {
  name:string,
  author:string,
  image:string,
  amount:number
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name:string = 'yeet';
  author:string = 'yeet';
  src:string = 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg';
  isShowing:boolean=true;

  books:Book[] = [
    {
      author:'yeet',
      name:'lol',
      image:'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:300
    },
    {
      author:'ye2et',
      name:'lol',
      image:'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:450
    },
    {
      author:'ye3et',
      name:'lol3',
      image:'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:250
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleBooks(){
    this.isShowing = !this.isShowing;
  }




}
