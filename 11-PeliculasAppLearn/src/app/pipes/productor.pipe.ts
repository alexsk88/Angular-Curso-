import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productor'
})
export class ProductorPipe implements PipeTransform {

  transform(productor: any, args?: any): any {

    // Esto lo hize porque lo que recibo es un Objeto
    // entonces lo recorri con forin y retorne .production_companies[iterator].name
    // que segun la API es en nombre de la productara
    //  PERO QUE PASA SI HAY MAS PORDUCTORAS ????? QUE HARA
    for (const iterator in productor.production_companies)
    {
      return productor.production_companies[iterator].name;  
    }
   
  }

}
