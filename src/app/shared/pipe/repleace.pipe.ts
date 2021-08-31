import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'repleace' // nome que será utilizado no atributo que desejamos fazer o repleace
})

export class RepleacePipe implements PipeTransform{

  transform(value: string, char: string, valueToRepleace: string) {
    return value.replace(char, valueToRepleace);
  }



}
