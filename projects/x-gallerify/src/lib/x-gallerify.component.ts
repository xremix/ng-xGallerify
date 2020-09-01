import { Component, OnInit, Input, TemplateRef, HostListener } from '@angular/core';
import { GalleryImage } from './models/gallery-image';
import { BreakPoint } from './models/breakpoint';
import { GridService } from './services/grid.service';

@Component({
  selector: 'ui-xGallerify',
  templateUrl: './x-gallerify.component.html',
  styleUrls: ['./x-gallerify.component.scss']
})
export class XGallerifyComponent implements OnInit {
  // Input Parameter
  @Input() public images: Array<GalleryImage> = [];
  @Input() public imageTemplate: TemplateRef<GalleryImage>;
  @Input() public breakPoints: Array<BreakPoint> =  GridService.defaultGrid();

  // Internal Parameter
  public rows: Array<Array<GalleryImage>> = [];
  private currentGrid = null;

  ngOnInit(): void {
    this.updateRows();
  }

  updateRows(){
    this.currentGrid = this.getCurrentGrid();
    this.rows = this.chunkArray(this.images, this.currentGrid.rows);
  }

  getCurrentGrid():any{
    let width = window.innerWidth;
    for (let i = 0; i < this.breakPoints.length; i++) {
      console.log(this.breakPoints[i].min)
      if(this.breakPoints[i].min < width && this.breakPoints[i].max >= width){
        return this.breakPoints[i];
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(this.getCurrentGrid().rows != this.currentGrid.rows){
      console.log("we got a change")
      this.updateRows();
    }
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
