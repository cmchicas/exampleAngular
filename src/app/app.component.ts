import { Component } from '@angular/core';
import { DataService } from './data.service'
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies: string[] = ['swimming','running','cycling'];
  name: string = "";
  age: number | undefined;
  posts: Array<Post> = [];

  constructor( private datasService: DataService){
      this.datasService.getData().subscribe(data =>{
        this.posts = data;
      });
  }

  deleteHobby(hobby: string){
    for (let i = 0; i < this.hobbies.length; i++){
      if(hobby == this.hobbies[i]){
        this.hobbies.splice(i,1);
      }

    }
  }

  addHobby(newHobby: any){
    this.hobbies.push(newHobby.value);
    newHobby.value = "";
    newHobby.focus();
    return false;
  }
};
