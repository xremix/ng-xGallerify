import { Injectable } from '@angular/core';
import { BreakPoint } from '../models/breakpoint';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }

  public static defaultGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 768,
      rows: 1
    }, {
      min: 768,
      max: 1200,
      rows: 2
    }, {
      min: 1200,
      max: 1200,
      rows: 3
    }, {
      min: 1800,
      max: 999999,
      rows: 4
    }];
  }

  public static bootstrapGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 768,
      rows: 1
    }, {
      min: 768,
      max: 992,
      rows: 2
    }, {
      min: 992,
      max: 1200,
      rows: 3
    }, {
      min: 1200,
      max: 999999,
      rows: 4
    }];
  }

  public static flickrGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 610,
      rows: 1
    }, {
      min: 610,
      max: 1300,
      rows: 2
    }, {
      min: 1300,
      max: 1800,
      rows: 3
    }, {
      min: 1800,
      max: 999999,
      rows: 4
    }];
  }

  public static smallGrid(): Array<BreakPoint> {
    return [{
      min: 0,
      max: 610,
      rows: 4
    }, {
      min: 610,
      max: 1300,
      rows: 6
    }, {
      min: 1300,
      max: 1800,
      rows: 10
    }, {
      min: 1800,
      max: 999999,
      rows: 14
    }];
  }
}
