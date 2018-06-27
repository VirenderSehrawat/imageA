import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  images:any[];
  filterBy?: string = 'all'
  visibleImages:any[] = [];
  varTime: Date;
  

  constructor(private imageService: ImageService) {
    console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
    this.varTime = new Date();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
