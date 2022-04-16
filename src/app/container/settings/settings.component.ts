import { Component } from '@angular/core';
import { RouterString } from 'src/app/utility/enums/routerStringDeclaration.enum';
import { IToolBarMenu } from 'src/app/utility/interfaces/toolbarmenu.interface';

@Component({
  selector: 'app-root-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class RootSettingsComponent {
  currentNav: string = '';
  constructor() {
    this.currentNav = window.location.href;
  }
  sideNavDetails: IToolBarMenu[] = ([
    {
      url: RouterString.TENURECONFIG,
      label: 'Tenure Configuration',
      icon: 'more_time',
    },
    {
      url: RouterString.FEESCOMPONENTCONFIG,
      label: 'Fees Component Configuration',
      icon: 'feed',
    },
    {
      url: RouterString.ROLECONFIG,
      label: 'Role Configuration',
      icon: 'manage_accounts',
    },
    {
      url: RouterString.ORGCONFIG,
      label: 'Organization Configuration',
      icon: 'room_preferences',
    },
  ]).map(i=>{
      let temp:any = {...i};
      temp.modifiedURL = `/container/settings/${i.url}`
      return temp;
  });
  showMenuText: boolean = false;
  toggleMenuText() {
    this.showMenuText = !this.showMenuText;
  }
  get leftMarginDecider(): 0.5 | 13 | 5 {
    return this.showMenuText === true ? 13 : 5;
  }
}
