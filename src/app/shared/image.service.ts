import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class ImageServiceAPI {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = '&per_page=9';
  private images: any[];

  constructor(private _http: Http) { }

  getImage(query) {
    return this._http.get(this.URL + query )
    // return this._http.get(this.URL + query + this.perPage)
    // .map(res => res.json());
  }

  setImages(data) {
    this.images = data;
  }
  displayImage(id) {
    // return this.images.filter[id];
    // console.log(this.images);
    // console.log(id);
    // return this.images.slice(0).find(image => image.id === id)

    // console.log(this.images.find(img => img.id === id));
    // return this.images.filter(element => element.id === id );
    return this.images[id];
  }
}
