import { Component } from "@angular/core";
import { LocalStorageService } from "../shared/services/local-storage.service";

@Component({
    selector: 'app-root-container',
    templateUrl: './container.component.html'
  })
  export class RootContainerComponents{
      avatarText:string = ''
      constructor(private storage:LocalStorageService){
        let session = this.storage.get('session');
        if(session && session?.username){
            this.avatarText = session.username
        }
      }
  }