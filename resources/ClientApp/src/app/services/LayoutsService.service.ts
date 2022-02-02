import { Injectable } from '@angular/core';

import { Layout001Component } from '../layouts/layout001/layout001.component';

import { AdItem } from '../classes/AdItem';

@Injectable()
export class LayoutsService {
  getLayouts() {
    return [
      new AdItem(
        Layout001Component,
        { headline: 'A Nuclear Bomb', body: 'Comment Now' }
      )
    ];
  }
}
