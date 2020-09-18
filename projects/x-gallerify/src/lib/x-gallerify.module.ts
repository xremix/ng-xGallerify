import { NgModule } from '@angular/core';
import { XGallerifyComponent } from './x-gallerify.component';
import { GalleryImage } from './models/gallery-image';
import { BreakPoint } from './models/breakpoint';
import { GridService } from './services/grid.service';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [XGallerifyComponent],
  imports: [
    CommonModule
  ],
  exports: [XGallerifyComponent]
})
export class XGallerifyModule { }
