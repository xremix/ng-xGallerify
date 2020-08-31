import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { GalleryImage } from './models/gallery-image';

@Component({
  selector: 'ui-xGallerify',

  templateUrl: './x-gallerify.component.html',
  styleUrls: ['./x-gallerify.component.scss']
})
export class XGallerifyComponent implements OnInit {
  @Input() public maxImagesPerRow: number = 4;
  @Input() public images: Array<GalleryImage> = [];
  @Input() public imageTemplate: TemplateRef<GalleryImage>;

  public rows: Array<Array<GalleryImage>> = [];

  ngOnInit(): void {
    this.rows = this.chunkArray(this.images, this.maxImagesPerRow);
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

  public imageLoaded(event: any, image: GalleryImage) {
    var htmlImageElement = event.path[0];
    image.width = htmlImageElement.width;
    image.height = htmlImageElement.height;
    image.ratio = image.width / image.height;
  }
}
