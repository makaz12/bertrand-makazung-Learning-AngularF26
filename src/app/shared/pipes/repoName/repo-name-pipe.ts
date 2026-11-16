import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoName',
})
export class RepoNamePipe implements PipeTransform {
  transform(name: string): string {
    let repoName = '';

    if(name.includes('-')){
      const l = name.split('-');
      for (let i = 0; i < l.length; i++) {
        repoName += l[i] + " ";
      }
    }else {
      repoName = name;
    }
    return repoName;
  }
}
