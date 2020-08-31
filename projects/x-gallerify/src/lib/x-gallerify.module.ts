import { NgModule } from '@angular/core';
import { XGallerifyComponent } from './x-gallerify.component';
import { GalleryImage } from './models/gallery-image';
import { BreakPoint } from './models/breakpoint';
import { GridService } from './services/grid';


@NgModule({
  declarations: [XGallerifyComponent],
  imports: [
  ],
  exports: [XGallerifyComponent, GalleryImage, BreakPoint, GridService]
})
export class XGallerifyModule { }
