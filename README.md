# ng-xGallerify

**WARNING, the current NPM is not working - currently this needs to get cloned**

**A lightweight, responsive, amazing looking photo gallery for [Angular](https://angular.io/).**

The row based design is very appealing, as it highlights landscape photos and allows it to show a beautiful image grid with no waste of space.

- Responsive *wip*
- Simple to use
- Lightweight
- Customizable
- Beautiful row based design
- Based on Flexbox
- Works with Angular
- [jQuery](https://github.com/xremix/xGallerify) (Original Project) and [AngularJS](https://github.com/JohnnyTheTank/angular-xGallerify) version available


## ToDo´s

Here is a list of features you will see in the future. If you have any suggestions, please open up an issue.

- [x] Support modes for different row sizes based on the screen size
- [x] Have a bootstrap mode
- [x] Have option to pass in own modes
- [ ] Improve default styling
- [ ] Get image loaded events out of the templates
- [ ] Have default themes, next to the plain one
- [ ] Pageing
- [ ] Loading Indicator
- [ ] Last row fix (for example to a max of 1/3 of screen height)

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
      url: "https://farm66.staticflickr.com/65535/49489692872_a202029a13_b.jpg",
    },
    {
      url: "https://farm66.staticflickr.com/65535/49489489251_21a1775a60_b.jpg",
    },
    {
      url: "https://farm66.staticflickr.com/65535/49489694752_f8d8745a85_b.jpg",
    },
    {
      url: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      url: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      url: "https://farm66.staticflickr.com/65535/49489694752_f8d8745a85_b.jpg",
    },
    {
      url: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      url: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
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
<ui-xGallerify [images]="images" [imageTemplate]="imageTemplate" #myGallery></ui-xGallerify>


<ng-template #imageTemplate let-image="image">
  <img class="xgallerify-img" url="{{image.url}}" (load)="myGallery.imageLoaded($event, image)">
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
            alert(image.url);
        }
    }
```

and your `my.component.html` like this

```
<ui-xGallerify [images]="images" [imageTemplate]="imageTemplate" #myGallery></ui-xGallerify>

<ng-template #imageTemplate let-image="image">
  <img class="xgallerify-img" src="{{image.url}}" (load)="myGallery.imageLoaded($event, image)" (click)="clickImage(image)">
</ng-template>
```

## Parameters

*This is still work in progress*

You can pass the following parameter to a gallery:

- breakPoints
- images
- imageTemplate


## Community

- xGallerify jQuery directive: [xremix/xGallerify](https://github.com/xremix/xGallerify)
- xGallerify AngularJS directive: [JohnnyTheTank/angular-xGallerify](https://github.com/JohnnyTheTank/angular-xGallerify)

Thanks everyone for contributing. Suggestions are always welcome.  
Also I'm happy to hear in which projects you've used the library.

[![Analytics](https://ga-beacon.appspot.com/UA-40522413-9/welcome-page)](https://github.com/xremix/ng-xGallerify)
