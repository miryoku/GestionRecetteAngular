import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Categorie } from 'src/app/core/model/Categorie';
import { RecetteComplete } from 'src/app/core/model/RecetteComplete';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { RecetteService } from 'src/app/core/services/recette.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  id: number = this.activeRoot.snapshot.params["id"]
  fg!: FormGroup;
  models!: RecetteComplete
  categories!: Categorie[]
  admin: number = 0
  constructor(private activeRoot: ActivatedRoute,
    private recetteService: RecetteService,
    public authServ: AuthService,
    private categorieService: CategorieService,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.loadRecette();

  }

  private loadRecette() {
    this.recetteService.getRecetteId(this.id).subscribe(
      data => {
        this.models = data
        console.log(data)
      }
    )
  }

  modeAdmin() {
    this.admin++;
    this.categorieService.getCategorie().subscribe(data => {
    /*  let first=[];
      let rest=[];
      data.forEach(element => {
        if (element.nom == this.models.recette.nomCategorie) {
          element.selected = true
          first.push(element)
        } else {
          element.selected = false
          rest.push(element);
        }
      });
     console.log(first)
     console.log(rest)*/



      this.categories = data

      this.fg = this.fb.group({
        nomRecette: [this.models.recette.nom, [Validators.required]],
        preparation: [this.models.recette.prepration, [Validators.required]],
        repos: [this.models.recette.repos, [Validators.required]],
        cuisson: [this.models.recette.cuisson, [Validators.required]],
        nbPersonne: [this.models.recette.nbPersonne, [Validators.required]],
        idCat: [this.models.recette.id_categorie, [Validators.required]]
      })
    })
  }
  modeUser() {
    this.admin--;
  }

  updateRecette() {
    console.log("d")
  }

  updateIngredient(id: number) {
    console.log(id)
  }
  deleteIngredient(id: number) {
    console.log(id)
  }

  recetteUpdate() {
    console.log("d")
  }
}
