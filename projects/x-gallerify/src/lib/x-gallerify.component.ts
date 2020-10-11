import { Component, OnInit, OnChanges, Input, TemplateRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GalleryImage } from './models/gallery-image';
import { BreakPoint } from './models/breakpoint';
import { GridService } from './services/grid.service';

@Component({
  selector: 'ui-xGallerify',
  templateUrl: './x-gallerify.component.html',
  styleUrls: ['./x-gallerify.component.scss']
})
export class XGallerifyComponent implements OnInit, OnChanges {
  // Input Parameter
  @Input() public images: Array<GalleryImage> = [];
  @Input() public imageTemplate: TemplateRef<GalleryImage>;
  @Input() public breakPoints: Array<BreakPoint> =  GridService.defaultGrid();

  // Internal Parameter
  public rows: Array<Array<GalleryImage>> = [];
  public currentGrid = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.updateRows();
  }

  // Triggers if any @Input() get's changed
  ngOnChanges(changes: any) {
    this.updateRows();
  }

  updateRows(){
    this.currentGrid = this.getCurrentGrid();
    this.rows = this.chunkArray(this.images, this.currentGrid.columns);
  }

  getCurrentGrid():any{
    if(isPlatformBrowser(this.platformId)) {
      let width = window.innerWidth;
      for (let i = 0; i < this.breakPoints.length; i++) {
        if(this.breakPoints[i].min < width && this.breakPoints[i].max >= width){
          return this.breakPoints[i];
        }
      }
    } else {
      console.warn('xGallerify is not running in a browser');
      return GridService.singleRowGrid()[0];
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(this.getCurrentGrid().columns != this.currentGrid.columns) {
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
    var htmlImageElement = event.target;
    image.width = htmlImageElement.width;
    image.height = htmlImageElement.height;
    image.ratio = image.width / image.height;
  }
}
