import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { RecetteComplete } from 'src/app/core/model/RecetteComplete';
import { AuthService } from 'src/app/core/services/auth.service';
import { RecetteService } from 'src/app/core/services/recette.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  id: number = this.activeRoot.snapshot.params["id"]
  models!: RecetteComplete
  test !:any 
  constructor(private activeRoot: ActivatedRoute,
    private recetteService: RecetteService,
    public authServ: AuthService,) {
     
     }

  ngOnInit(): void {
    console.log(this.authServ.user)
    console.log(this.authServ.jwtdecode)
    console.log(this.authServ.user?.Role)
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


}
