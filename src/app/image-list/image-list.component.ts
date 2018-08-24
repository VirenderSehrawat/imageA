import { Component, OnInit } from '@angular/core';
import { ImageServiceAPI } from '../shared/image.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  showResults: boolean = false;
  searchQuery: string;

  varTime = new Observable(observer => {
    setInterval( () => {
      observer.next(new Date().toString() );
    } , 1000);
  });

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error) {
    console.log(error);
  }

  constructor(private _imageService: ImageServiceAPI) { }

  searchImages(query: string) {
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data.json()),
      error => this.handleError(error),
      () => { this.searching = false;
        this.showResults = true;
      }
    );
  }
  ngOnInit() {
  }
  onKeypress(event: any) {
    if (event.key === 'Enter') {
      console.log(event);
      console.log(this.searchQuery);
      this.searchImages(this.searchQuery);
    }  }
}
