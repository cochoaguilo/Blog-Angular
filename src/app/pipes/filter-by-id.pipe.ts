import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterById'
})
export class FilterByIdPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    if (!arg) return value
    const resultPosts = [];
    for (const todo of value){
      if (todo.userId===arg) {
        
        
        resultPosts.push(todo)
      }
    }
    return resultPosts;
  }
}
