import type { ImageMetadata } from "astro";

export default interface IProject{
    id: number;
    importance: 'low' | 'medium' | 'high';
    name: string;
    description: string;
    projectDescription: string[];
    cover: ImageMetadata;
    images: ImageMetadata[];
    projectUrl?: string;
    sourceUrl?: string;
    complement: IComplement[];
    state: "Terminado" | "En Proceso" | "En Espera" | "Cancelado" | "In Progress" | "Finished" | "Waiting" | "Canceled";
}

export interface IComplement{
    name: string;
    icon: any;
}