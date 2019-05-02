import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  busqueda: any[];
  mostrarsearch = false;

  constructor(private moviservice: ThemoviedbService) 
  {
    
  }

  ngOnInit() {
  }

  busquedaapp(palabra: string)
  {
    this.moviservice.buscarmovie(palabra).subscribe(data=>{
      console.log(data);
      this.busqueda = data;
      this.mostrarsearch = true;
    });
  }
}
