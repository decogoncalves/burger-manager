import { http } from './http';

export const fetchIngredients = () => http.get('lsbru');

export const fetchRecipes = () => http.get('bnyhm');
