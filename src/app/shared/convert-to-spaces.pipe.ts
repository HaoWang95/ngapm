import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'convertToSpaces',
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, chars: string): string{
        return value.replace(chars, ' ');
    }
}