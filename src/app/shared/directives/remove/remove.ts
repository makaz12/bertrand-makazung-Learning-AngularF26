import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appRemove]',
  host: {
    '(click)': 'ask()'
  },
})
export class Remove {
  message = input('', { alias: 'appRemove' });
  protected confirmed = output();

  ask(){
    if(confirm(this.message())){
      this.confirmed.emit()
    }
  }
}
