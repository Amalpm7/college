import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
  name=""
  rollNo=""
  collegeId=""
  parentName=""
  dob=""
  address=""
  mobnum=""
  email=""
  bloodG=""
  readValue=()=>{
    let data={
      "name":this.name,
  "rollNo":this.rollNo,
  "collegeId":this.collegeId,
  "parentName":this.parentName,
  "dob":this.dob,
  "address":this.address,
  "mobnum":this.mobnum,
  "email":this.email,
  "bloodG":this.bloodG
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
