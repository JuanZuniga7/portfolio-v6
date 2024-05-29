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
}

export interface IComplement{
    name: string;
    version: string;
    icon: any;
}