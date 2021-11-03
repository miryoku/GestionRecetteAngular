import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from 'src/app/core/model/Recette';
import { RecetteService } from 'src/app/core/services/recette.service';


@Component({
  selector: 'app-list-recette',
  templateUrl: './list-recette.component.html',
  styleUrls: ['./list-recette.component.scss']
})
export class ListRecetteComponent implements OnInit {

  models !: Recette[];

  constructor(private recetteService:RecetteService,
    public router: Router,) {}

  ngOnInit() {
    this.loadRecette()
  }

  private loadRecette(){
    this.recetteService.getRecetteList().subscribe(
      data=>{
        this.models=data
      }
    )
  }

  detail(id:number){
    this.router.navigateByUrl("/Recette/"+id)
  }
}
