import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
    {"id":1, "category": "boats", "caption": "View from the boat", "url":"assets/img/boat_01.jpeg"},
    {"id":2, "category": "boats", "caption": "Sailing the coast", "url":"assets/img/boat_02.jpeg"},
    {"id":3, "category": "boats", "caption": "The water was nice", "url":"assets/img/boat_03.jpeg"},
    {"id":4, "category": "boats", "caption": "Cool water cavern", "url":"assets/img/boat_04.jpeg"},
    {"id":5, "category": "boats", "caption": "Sunset at the docks", "url":"assets/img/boat_05.jpeg"},
    {"id":6, "category": "camping", "caption": "Camping Trip '17'", "url":"assets/img/camping_01.jpeg"},
    {"id":7, "category": "camping", "caption": "Kim and Jessie", "url":"assets/img/camping_02.jpeg"},
    {"id":8, "category": "camping", "caption": "View from the top", "url":"assets/img/camping_03.jpeg"},
    {"id":9, "category": "camping", "caption": "On the trail", "url":"assets/img/camping_04.jpg"},
    {"id":10, "category": "camping", "caption": "Our camping spot", "url":"assets/img/camping_05.jpeg"},
    {"id":11, "category": "camping", "caption": "RV Life", "url":"assets/img/camping_06.jpg"},
    {"id":12, "category": "camping", "caption": "Hiking trip 2017", "url":"assets/img/camping_07.jpeg"},
    {"id":13, "category": "library", "caption": "Big library", "url":"assets/img/library_01.jpeg"},
    {"id":14, "category": "library", "caption": "Stacks", "url":"assets/img/library_02.jpeg"},
    {"id":15, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/library_03.jpeg"},
    {"id":16, "category": "library", "caption": "Local library", "url":"assets/img/library_04.jpeg"},
    {"id":17, "category": "library", "caption": "Nice library", "url":"assets/img/library_05.jpeg"},
    {"id":18, "category": "maps", "caption": "Nice maps", "url":"assets/img/maps_01.jpeg"},
    {"id":19, "category": "maps", "caption": "New maps", "url":"assets/img/maps_02.jpeg"},
    {"id":20, "category": "maps", "caption": "only maps", "url":"assets/img/maps_03.jpeg"},
    {"id":21, "category": "dogs", "caption": "dogs only", "url":"assets/img/dogs_04.jpeg"},
    {"id":22, "category": "dogs", "caption": "only dogs", "url":"assets/img/dogs_01.jpeg"},
    {"id":23, "category": "dogs", "caption": "only dogs", "url":"assets/img/dogs_02.jpeg"},
    {"id":24, "category": "dogs", "caption": "only dogs", "url":"assets/img/dogs_03.jpg"},
    {"id":25, "category": "dogs", "caption": "only dogs", "url":"assets/img/dogs_05.jpeg"},
    {"id":26, "category": "dogs", "caption": "only dogs", "url":"assets/img/dogs_06.jpeg"},
    {"id":27, "category": "rain", "caption": "it rain", "url":"assets/img/rain_01.jpeg"},
    {"id":28, "category": "rain", "caption": " its rain", "url":"assets/img/rain_02.jpeg"},
    {"id":29, "category": "rain", "caption": "rain ", "url":"assets/img/rain_03.jpeg"},
    {"id":30, "category": "rain", "caption": " it raining", "url":"assets/img/rain_04.jpeg"},
    {"id":31, "category": "canal", "caption": "only canals", "url":"assets/img/canal_01.jpeg"},
    {"id":32, "category": "canal", "caption": "only canals", "url":"assets/img/canal_02.jpeg"},
    {"id":33, "category": "canal", "caption": "only canals", "url":"assets/img/canal_03.jpeg"},
    {"id":34, "category": "canal", "caption": "only canals", "url":"assets/img/canal_04.jpeg"},
    {"id":35, "category": "canal", "caption": "only canals", "url":"assets/img/canal_05.jpeg"},
    {"id":36, "category": "canal", "caption": "only canals", "url":"assets/img/canal_06.jpeg"},
    {"id":37, "category": "city", "caption": "only city", "url":"assets/img/city_01.jpeg"},
    {"id":38, "category": "city", "caption": "only city", "url":"assets/img/city_02.jpeg"},
    {"id":39, "category": "city", "caption": "only city", "url":"assets/img/city_03.jpeg"},
    {"id":40, "category": "city", "caption": "only city", "url":"assets/img/city_04.jpeg"},
    {"id":41, "category": "city", "caption": "only city", "url":"assets/img/city_05.jpeg"},
    {"id":42, "category": "flood", "caption": "flood city", "url":"assets/img/flood_01.jpeg"},
    {"id":43, "category": "flood", "caption": "flood city", "url":"assets/img/flood_02.jpeg"},
    {"id":44, "category": "flood", "caption": "flood city", "url":"assets/img/flood_03.jpeg"},
    {"id":45, "category": "flood", "caption": "flood city", "url":"assets/img/flood_04.jpeg"},
    {"id":46, "category": "flood", "caption": "flood city", "url":"assets/img/flood_05.jpeg"},
    {"id":47, "category": "flood", "caption": "flood city", "url":"assets/img/flood_06.jpeg"}
]