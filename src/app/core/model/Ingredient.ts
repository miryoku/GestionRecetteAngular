export interface TIngredient {
  id: number;
  idRecette: number;
  idBis: number;
  quantite: number;
  idTries: number;
}

export interface Ingredient{
  id:number;
  nom:string;
  descrption:string;
  img:string;
}

export interface Unite{
  
    id: number;
    unite: string;
  
}

export interface ListIngredient{
  ingredient:Ingredient;
  unite:Unite;
}