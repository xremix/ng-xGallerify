# ng-xGallerify

A lightweight, responsive, amazing looking photo gallery, based on [Angular](https://angular.io/)

- Responsive
- Simple to use
- Lightweight
- Customizable
- Based on Flexbox
- Works with Angular
- [jQuery](https://github.com/xremix/xGallerify) (Original Project) and [AngularJS](https://github.com/JohnnyTheTank/angular-xGallerify) version available

## Demo

*WIP*

## Usage

First run `npm i 'ng-xGallerify'` to install the dependency in your project

Next make the following adjustments to your app.modules.ts

```

import { XGallerifyComponent } from 'x-gallerify'
...


@NgModule({
  declarations: [
    AppComponent,
    XGallerifyComponent
  ...

```

Then in your `my.component.ts` you should have some code like this:

```
import { GalleryImage } from 'x-gallerify';

...
export class AppComponent {
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
}

```

Your `my.component.html` should look like this:

```
<ui-xGallerify [images]="images"></ui-xGallerify>
```

### Advanced usage


#### Custom Template / Design

To make use of your own design you can have your own template

```
<ui-xGallerify [images]="images" [imageTemplate]="imageTemplate" #xgallery></ui-xGallerify>


<ng-template #imageTemplate let-image="image">
  <img class="xgallerify-img" src="{{image.src}}" (load)="xgallery.imageLoaded($event, image)">
  <div style="position: absolute; background: rgba(0,0,0,0.5); left: 0px; right: 0px; bottom: 0px; height: 20px;">
  You can place some title here
  </div>
</ng-template>

```

#### Click events

If you want to trigger a click event, once an image gets clicked, you can make use of the templates as well.

Your `my.component.ts` would look like this

```
    import { GalleryImage } from 'xgallerify';
    export class AppComponent {
        public clickImage(image: Image){
            alert(image.src);
        }
    }
```

and your `my.component.html` like this

```
<ui-xGallerify [images]="images" [imageTemplate]="imageTemplate" #xgallery></ui-xGallerify>

<ng-template #imageTemplate let-image="image">
  <img class="xgallerify-img" src="{{image.src}}" (load)="xgallery.imageLoaded($event, image)" (click)="clickImage(image)">
</ng-template>

```