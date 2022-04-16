import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeUrlMatcher'
})
export class UrlMatcherPipe implements PipeTransform {

  transform(value: any, url: any) {
    try{
      if(url){
        let urlBreaker = url.split('/').map((i:any)=>i.toLowerCase());
        if(urlBreaker.includes(value.replace(/\//g,'').toLowerCase())) return 'active';
        else{

          return ''
        }
      }
      return ''

    }catch(e){
      return ''
    }
  }

}
