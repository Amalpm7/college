import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor() { }
  rollNo=""
  getvalue=()=>{
    let data ={
      "rollNo":this.rollNo
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
