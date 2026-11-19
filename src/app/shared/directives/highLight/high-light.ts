import { Directive, input, signal } from '@angular/core';
import { color } from 'listr2';

@Directive({
  selector: '[appHighLight]',
  host: {
    '(mouseenter)': 'active.set(true)',
    '(mouseleave)': 'active.set(false)',
    '[style.background]': "active() ? (color() || '#FFA500'): ''",
  },
})
export class HighLight {
  protected color = input('', {alias: 'appHoghlight'})
  protected active = signal(false);
}
