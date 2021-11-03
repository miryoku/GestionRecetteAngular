import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecetteComponent } from 'src/app/component/recette/recette.component';
import { environment } from 'src/environments/environment';
import { Etape, TEtape } from '../model/Etape';
import { Ingredient, TIngredient, Unite } from '../model/Ingredient';
import { Recette } from '../model/Recette';
import { RecetteComplete } from '../model/RecetteComplete';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private readonly url:string =environment.url_uri;

  constructor(private httpClient: HttpClient,) { }

  public getRecetteList():Observable<Recette[]>{
    return this.httpClient.get<Recette[]>(this.url+"Recette")
  }

  public getRecetteId(id: number):Observable<RecetteComplete>{
    return this.httpClient.get<RecetteComplete>(this.url+"Recette/"+id) 
  }


}
