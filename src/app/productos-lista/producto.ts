import { oferta } from "./oferta";

export interface producto {
    name: string;
    description: string;
    price: number;
    image: string;
    clearance: boolean;
    oferta: oferta;
  }