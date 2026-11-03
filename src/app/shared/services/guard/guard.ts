import { Service, signal } from '@angular/core';

@Service()
export class Guard {
  guardEnabled = signal(false);

  change(){
    this.guardEnabled.update(val => !val);
  }
}
