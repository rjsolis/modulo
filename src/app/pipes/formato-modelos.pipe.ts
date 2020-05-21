import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoModelos'
})
export class FormatoModelosPipe implements PipeTransform {

  transform(modelos: number[], ...args: any[]): any {
    let fixedValue: string;
    let cant: number = modelos.length

    if(cant == 1 || cant == 2){

      return modelos;
    }
    else {
    fixedValue = `[${modelos[0]}-${modelos[cant -1]}]`
    return fixedValue;
    }
  }

}
