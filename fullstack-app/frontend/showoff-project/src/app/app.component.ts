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
  weather: boolean = false;

  constructor(private http: HttpClient) { }

  toggleWeather() {
    if (this.weather) {
      this.weather = false;
    } else {
      this.weather = true;
    }
  }

  request() {
    return this.http.get(this.url);
  }

  ngOnInit() {
    this.request().subscribe((res: any) => {
      let text = JSON.stringify(res.data);
      this.data = text.split('\\n');
    });
  }
}
