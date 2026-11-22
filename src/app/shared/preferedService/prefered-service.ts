import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferedService {
  private storageKey = 'project.background'
  private background = signal(this.load());
  readonly backgroundColour = this.background.asReadonly();

  constructor() {
    effect(() =>{
      try {
        localStorage.setItem(this.storageKey, JSON.stringify((this.background())))
      }catch {
        prompt("Unable to save background preference")
      }
    })
  }

  private load(){
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : 'bdf7f7';
    }catch {
      return 'bdf7f7';
    }
  }

  changeBackground(colour: string){
    this.background.set(colour)
  }

}
