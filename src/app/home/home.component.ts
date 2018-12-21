import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
 console.log("Bonjour tous le monde");
   this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
  }
  firstClick() {
    this.data.firstClick();
  }
}
