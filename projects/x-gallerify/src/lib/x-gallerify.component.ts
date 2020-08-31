import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-xGallerify',

  templateUrl: './x-gallerify.component.html',
  styleUrls: ['./x-gallerify.component.scss']
})
export class XGallerifyComponent implements OnInit {
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
        src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
      },
      {
        src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
      }
    ];
  constructor() { }

  ngOnInit(): void {
  }


  imageLoaded(event: any){
    console.log(event)
    var img = event.path[0];
    var width = img.width;
    var height = img.height;
    var ratio  = width / height;

    for (let i = 0; i < this.images.length; i++) {
      if(this.images[i].src === img.src){
        this.images[i].ratio = ratio;
      }
    }
  }

}
