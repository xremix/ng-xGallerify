import { NgModule } from '@angular/core';
import { XGallerifyComponent } from './x-gallerify.component';
import { GalleryImage } from './models/gallery-image';
import { BreakPoint } from './models/breakpoint';


@NgModule({
  declarations: [XGallerifyComponent],
  imports: [
  ],
  exports: [XGallerifyComponent, GalleryImage, BreakPoint]
})
export class XGallerifyModule { }
