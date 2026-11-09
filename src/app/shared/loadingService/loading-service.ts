import { computed, Service, signal } from '@angular/core';

@Service()
export class LoadingService {
  private count = signal(0);
  isLoading = computed(() =>this.count() > 0);

  increase(){
    this.count.update(n => n +1);
  }

  decrease(){
    this.count.update(n => Math.max(0, n-1));
  }
}
