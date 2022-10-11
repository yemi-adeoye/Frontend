import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x:number=20;
  y:number=10;
  msg:string; //undefined
  result:number;

  welcomeFunc(){
    this.msg='Hey Welcome to angular';
  }

  taskFunc(){
    this.msg="work with typescript";
  }

  calc(op:string){
    switch(op){
      case 'add':
        this.result=this.x+this.y;
        break;
      case 'sub':
        this.result=this.x-this.y;
        break;
    }
  }
}

/*
  number,string,boolean
*/
