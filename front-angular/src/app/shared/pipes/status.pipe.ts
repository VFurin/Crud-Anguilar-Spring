import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'ativo': return 'person';
      case 'inativo': return 'person_off';
    }
    return 'person';
  }

}
