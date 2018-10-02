import { Component, OnInit } from '@angular/core';
import { ImageServiceAPI } from '../shared/image.service';
import { Observable } from 'rxjs'

export interface SearchLocation {
     value: string;
     viewValue: string;
}
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

  viewOptions: any[] = [
    {id: 1, vwOption: 'Small'},
    {id: 2, vwOption: 'Medium'},
    {id: 3, vwOption: 'Large'}
  ];
  defaultViewOption: '1';

  searchLocations: SearchLocation[] = [
    {value: 'Local', viewValue: 'Local Server'},
    {value: 'cyber', viewValue: 'Cyber Space Server'}
  ];
  defaultSearchLocation = 'cyber';

  varTime = new Observable(observer => {
    setInterval( () => {
      observer.next(new Date().toString() );
    } , 1000);
  });

  searchTime: number;
  tImagesFound: number;
  showImagesWithPath: boolean;
  showImages: boolean;

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
    this._imageService.setImages(data.hits);

    this.tImagesFound = this.images.length;
    this.searchTime = Math.random();

    this.showImages = true;
    this.showImagesWithPath = false;
  }

  onShowWithPath() {
    this.showImages = false;
    this.showImagesWithPath = true;
  }
  onShowImages() {
    this.showImages = true;
    this.showImagesWithPath = false;
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
      // if (this.searchQuery === ''){return;}
      console.log(event);
      console.log(this.searchQuery);
      this.searchImages(this.searchQuery);

      /*
      if (this.searchQuery.length > 3) {
      this.searchImages(this.searchQuery);
      }
      */
    }
  }
}
