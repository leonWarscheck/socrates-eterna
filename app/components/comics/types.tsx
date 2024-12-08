import type { ReactNode } from 'react';

export interface Props{
    children?: ReactNode;
    isSearching?: boolean;
    mode?: string;
    query?: string;
    results?: LoaderResults;
}

export interface Character {
    name: string;
    image: string;
  }

export interface Comic {
    id?: string;
    values?: number[];
    metadata: ComicMetadata
}

export interface ComicMetadata {
    filename: string;
    published: string;
    title: string;
    content: string;
}

export type LoaderResults = Comic[]

