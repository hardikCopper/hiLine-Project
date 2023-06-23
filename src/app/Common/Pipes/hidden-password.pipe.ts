import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiddenPassword'
})
export class HiddenPasswordPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let hiddenPassword = "";

    for (let i = 0; i < value.length; i++) {
      hiddenPassword += "*";
    }

    return hiddenPassword;
  }

}
