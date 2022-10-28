import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-service';
import {Employee} from '../../../models/employee.model'
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent   {
  employees: Employee[] =[];
   data = [];
  constructor(private http: HttpClient) {}
  //array varibales to store csv data
 lines = []; //for headings
 linesR = []; // for rows
   myFormData = new FormData();
 //File upload function
 changeListener(files: FileList){
  console.log(files);
  if(files && files.length > 0) {
     let file : File = files.item(0);
       console.log(file.name);
       console.log(file.size);
       console.log(file.type);
       let reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
        let csv: any = reader.result;
        let allTextLines = [];
        allTextLines = csv.split(/\r|\n|\r/);
       // console.log(allTextLines);

       //Table Headings
        let headers = allTextLines[0].split(';');
        let data = headers;
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        //Pusd headinf to array variable
        this.lines.push(tarr);


        // Table Rows
        let tarrR = [];

        //Create formdata object

        let arrl = allTextLines.length;
        let rows = [];

        for(let i = 1; i < arrl; i++){
        rows.push(allTextLines[i].split(';'));
        if(allTextLines[i]!=""){

        // Save file data into formdata varibale
        this.myFormData.append("data"+i, allTextLines[i]);
      }
        }

        for (let j = 0; j < arrl; j++) {



            tarrR.push(rows[j]);
            tarrR = tarrR.filter(function(i){ return i != ""; });



            // Begin assigning parameters





        }
       //Push rows to array variable
        this.linesR.push(tarrR);

        console.log()


    }
  }

  this.myFormData.forEach((x: File) => {
    console.log(x);
  });

}

}
/*
let employee:Employee = {
            name: valArry[0],
            jobTitle: valArry[3],
            email: valArry[1],
            password: valArry[2],
            totalLeaves: valArry[4],
            leavesLeft: valArry[5],
            managerName: valArry[6]
          };
*/
