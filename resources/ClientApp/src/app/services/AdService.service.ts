import { Injectable } from '@angular/core';

import { AdJobComponentComponent } from '../components/ad-job-component/ad-job-component.component';

import { AdItem } from '../classes/AdItem';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        AdJobComponentComponent,
        { headline: 'An Nuclear Bomb', body: 'Comment Now' }
      ),
      new AdItem(
        AdJobComponentComponent,
        { headline: 'Power Of One', body: 'Mtv saying' }
      ),
      new AdItem(
        AdJobComponentComponent,
        { headline: 'Firing', body: 'There\'s been a shooting' }
      ),
      new AdItem(
        AdJobComponentComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      )
    ];
  }
}
