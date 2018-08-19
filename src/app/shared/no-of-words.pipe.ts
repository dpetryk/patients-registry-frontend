import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'NumberOfWordsPipe'
})
export class NumberOfWordsPipe implements PipeTransform {

    transform(expression: string, howManyWords: number): string {  
        return expression.split(' ').slice(0, howManyWords).join(' ');
    }
}