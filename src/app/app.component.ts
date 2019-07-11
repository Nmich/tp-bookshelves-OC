import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(){
    let firebaseConfig = {
      apiKey: "AIzaSyBXNW_48f8LX4PyzL2gM78I18JceHMg6C4",
      authDomain: "bookshelves-ba6c0.firebaseapp.com",
      databaseURL: "https://bookshelves-ba6c0.firebaseio.com",
      projectId: "bookshelves-ba6c0",
      storageBucket: "",
      messagingSenderId: "1013102003211",
      appId: "1:1013102003211:web:b25507a6defd2f7e"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
