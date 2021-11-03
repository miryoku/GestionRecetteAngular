export interface RecetteComplete {
  recette: Recette;
  composant: Composant[];
  ustensiles: Ustensile[];
  etapes: Etape[];
}

interface Etape {
  id: number;
  etape: number;
  instruction: string;
}

interface Ustensile {
  ustensiles: Ustensiles;
  quantite: number;
}

interface Ustensiles {
  id: number;
  nom: string;
  img: string;
}

interface Composant {
  ingredients: Ingredients;
  unites: Unites;
  quantite: number;
}

interface Unites {
  id: number;
  unite: string;
}

interface Ingredients {
  id: number;
  nom: string;
  descrptions: string;
  img: string;
}

interface Recette {
  id: number;
  nom: string;
  img: string;
  nbPersonne: number;
  nomCategorie: string;
  prepration: number;
  repos: number;
  cuisson: number;
  id_categorie: number;
  rating: string;
}