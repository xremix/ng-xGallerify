import { NgModule } from '@angular/core';
import { XGallerifyComponent } from './x-gallerify.component';
import { GalleryImage } from './models/gallery-image';


@NgModule({
  declarations: [XGallerifyComponent],
  imports: [
  ],
  exports: [XGallerifyComponent, GalleryImage]
})
export class XGallerifyModule { }
