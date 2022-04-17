import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { debounceTime, delay, takeUntil, tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { AutoUnSubscribeService } from 'src/app/shared/services/auto-unsubscribe/auto-un-subscribe.service';
import { RootMenu } from 'src/app/utility/utility';
import { RouterString } from 'src/app/utility/enums/routerStringDeclaration.enum';

@Component({
  selector: 'app-one-column-layout',
  templateUrl: './one-column.component.html',
  styleUrls: ['./one-column.component.scss'],
})
export class OneColumnComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  menuIems =[...RootMenu]

  @Input()profilePhotoURL:string='';
  @Input()avatarText:string='';

  
  localSideNavState: 'open' | 'close' = 'open';
  currentNav:string = ''

  showMenuText: boolean = true;
  @Input()showNavInterceptor:boolean = true
  loadingNavProgress:boolean = true;

  get leftMarginDecider(): 0.5 | 10 | 5 {
    if (this.localSideNavState === 'open') {
      return this.showMenuText === true ? 10 : 5;
    } else return 0.5;
  }

  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private router:Router,
    private destroy$:AutoUnSubscribeService
  ) {
    this.menuIems = this.menuIems.map(i=>{
      let temp = {...i};
      temp.modifiedURL = `/${RouterString.CONTAINER}/${i.url}`;
      return temp;
    })
    router.events.pipe(tap((e:any)=>this.navigationInterceptor(e)),takeUntil(destroy$)).subscribe(d=>{
      this.currentNav = window.location.href
    })
  }

  ngAfterViewInit() {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.localSideNavState = 'close';
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.localSideNavState = 'open';
      }
    });
    this.cdr.detectChanges();
  }
  toggle() {
    if (this.sidenav) {
      this.sidenav.opened = !this.sidenav.opened;
      this.localSideNavState = this.sidenav.opened ? 'open' : 'close';
    }
  }
  toggleMenuText() {
    this.showMenuText = !this.showMenuText;
  }
  loadRouteToStorage(e: any) {}
  navigationInterceptor(event: RouterEvent): void {
    // this.currentNav = event.url
  
    if (event instanceof NavigationStart) {
      this.loadingNavProgress = true
    }
    if (event instanceof NavigationEnd) {
      this.loadingNavProgress = false
    }

    if (event instanceof NavigationCancel) {
      this.loadingNavProgress = false
    }
    if (event instanceof NavigationError) {
      this.loadingNavProgress = false
    }
  }
}
