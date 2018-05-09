import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TopPage } from '../top/top';
import { WatchPage } from '../watch/watch';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TopPage;
  tab3Root = WatchPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
