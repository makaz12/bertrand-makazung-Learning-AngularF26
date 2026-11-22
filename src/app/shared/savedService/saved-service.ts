import { effect, inject, Injectable, input, Service, signal } from '@angular/core';

@Injectable()
export class SavedService {
  private storageKey = 'project.saved';
  protected id = signal<string[]>(this.load());
  savedList = this.id.asReadonly();

  constructor() {
    effect(() =>{
      localStorage.setItem(this.storageKey, JSON.stringify(this.id()))
    })
  }

  private load(): string[] {
    try{
    const data = localStorage.getItem(this.storageKey);
    if (!data) return [];
    const ids = JSON.parse(data);
    return Array.isArray(ids) ? ids : [];
    }catch {
      return [];
    }
  }

  isSaved(id: string): boolean{
    return this.id().includes(id)
  }
  toggleId(id: string) {
    // if (!id) {
    //   this.id.update((ids) => [...ids, id]);
    // }
    // if (id) {
    //   this.id.update((ids) => ids.filter((existingId) => existingId != id));
    // }
    this.id.update(ids =>ids.includes(id) ? ids.filter(projectId => projectId !== id) : [...ids, id])
  }
}
