import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-xGallerify',

  templateUrl: './x-gallerify.component.html',
  styleUrls: ['./x-gallerify.component.scss']
})
export class XGallerifyComponent implements OnInit {
  public maxPerRow: number = 4;
  public images: Array<any> = [
    {
      src: "https://farm66.staticflickr.com/65535/49489692872_a202029a13_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49489489251_21a1775a60_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49489694752_f8d8745a85_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49489694752_f8d8745a85_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    }
  ];
  public rows: Array<Array<any>> = [];

  ngOnInit(): void {
    this.rows = this.chunkArray(this.images, this.maxPerRow);
  }

  private chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  imageLoaded(event: any, image: any) {
    console.log(event);
    var htmlImageElement = event.path[0];
    image.width = htmlImageElement.width;
    image.height = htmlImageElement.height;
    image.ratio = image.width / image.height;
  }
}
