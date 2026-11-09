import { Service, signal } from '@angular/core';

@Service()
export class ErrorService {
  error = signal<string | null>(null);
  setError(message: string){
    this.error.set(message)
  }
  clearError(){
    this.error.set(null);
  }
}
