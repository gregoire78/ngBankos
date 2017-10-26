import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'picto'
})
export class PictoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value >= 0) ? "/assets/images/$$$.png": "/assets/images/--.png";
  }

}
