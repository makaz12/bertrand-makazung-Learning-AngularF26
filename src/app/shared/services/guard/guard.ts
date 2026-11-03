import { Service, signal } from '@angular/core';

@Service()
export class Guard {
  guardEnabled = signal(true);

  change(){
    this.guardEnabled.update(val => !val);
  }
}
