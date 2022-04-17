import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { delay, Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'miniSchoolERP';
  routerEvents$!: Observable<any>;
  loadingNavProgress: boolean = false;
  constructor(private router: Router) {
    this.routerEvents$ = router.events.pipe().pipe(
      // delay(2*1000),
      tap((e: any) => this.navigationInterceptor(e))
    );
  }

  ngOnInit() {}

  navigationInterceptor(event: RouterEvent): void {
    // this.currentNav = event.url

      if (event instanceof NavigationStart) {
        this.loadingNavProgress = true;
      }
      if (event instanceof NavigationEnd) {
        this.loadingNavProgress = false;
      }

      if (event instanceof NavigationCancel) {
        this.loadingNavProgress = false;
      }
      if (event instanceof NavigationError) {
        this.loadingNavProgress = false;
      }
  }
}
