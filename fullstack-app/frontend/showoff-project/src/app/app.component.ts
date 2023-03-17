import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'showoff-project';
  url = 'http://localhost:3000/labNotes';
  data: string[] = [''];

  constructor(private http: HttpClient) { }

  request() {
    return this.http.get(this.url);
  }

  ngOnInit() {
    this.request().subscribe(res => {
      let text = JSON.stringify(res);
      this.data = text.split('\\n');
      console.log(this.data);
    });
  }
}
