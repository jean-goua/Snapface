import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap: FaceSnap;
  buttonText: string;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.buttonText = 'oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oups, unSnap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'oh Snap!';
    }
  }

  onViewFaceSnap() {
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
