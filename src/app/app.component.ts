import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap: FaceSnap;
  myOtherSnap: FaceSnap;
  myLastSnap: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Axel',
      'Mon colocataire depuis septembre',
      'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Lucas',
      'Mon cousin avec un bonnet',
      'https://images.unsplash.com/photo-1646230746472-fc48d04dd2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Leygalie',
      'Le village où j\'ai grandi',
      'https://images.unsplash.com/photo-1646126647036-2ece8b04249d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      new Date(),
      0
    );
  }
}
