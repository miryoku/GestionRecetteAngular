import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../model/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private readonly url : string = environment.url_uri

  constructor(private httpClient: HttpClient,) { }

  public getCategorie(): Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(this.url+"Categorie")
  }

}
