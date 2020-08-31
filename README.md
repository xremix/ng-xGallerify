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