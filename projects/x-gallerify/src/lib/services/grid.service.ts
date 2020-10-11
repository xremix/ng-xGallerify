import { Injectable } from '@angular/core';
import { BreakPoint } from '../models/breakpoint';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }

  public static singleRowGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 999999,
      columns: 1
    }];
  }

  public static defaultGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 768,
      columns: 1
    }, {
      min: 768,
      max: 1200,
      columns: 2
    }, {
      min: 1200,
      max: 1800,
      columns: 3
    }, {
      min: 1800,
      max: 999999,
      columns: 4
    }];
  }

  public static bootstrapGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 768,
      columns: 1
    }, {
      min: 768,
      max: 992,
      columns: 2
    }, {
      min: 992,
      max: 1200,
      columns: 3
    }, {
      min: 1200,
      max: 999999,
      columns: 4
    }];
  }

  public static flickrGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 610,
      columns: 1
    }, {
      min: 610,
      max: 1300,
      columns: 2
    }, {
      min: 1300,
      max: 1800,
      columns: 3
    }, {
      min: 1800,
      max: 999999,
      columns: 4
    }];
  }

  public static smallGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 610,
      columns: 4
    }, {
      min: 610,
      max: 1300,
      columns: 6
    }, {
      min: 1300,
      max: 1800,
      columns: 10
    }, {
      min: 1800,
      max: 999999,
      columns: 14
    }];
  }
}
