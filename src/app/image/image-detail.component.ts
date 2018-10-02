import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router'
import { ImageServiceAPI } from 'app/shared/image.service';

@Component({
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: any

  constructor(private imageService: ImageService,
    private _imageSrvice: ImageServiceAPI,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.image = this.imageService.getImage(this.route.snapshot.params['id'])
    this.image = this._imageSrvice.displayImage(this.route.snapshot.params['id'])
    // console.log(this.image);
  }
}
