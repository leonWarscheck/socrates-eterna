import { RecordSparseValues, RecordValues } from '@pinecone-database/pinecone';
import type { ReactNode, ComponentProps } from 'react';


export type ModeProp = { mode: string }
export type IsSearchingProp = { isSearching: boolean }
export type ChildrenProp = { children: ReactNode }
export type QueryProp = { query: string }
export type ResultsProp = { results: ComicCleaned[] }

export type ModeBarProps = IsSearchingProp & QueryProp
export type SearchComponentParentProps = ChildrenProp & IsSearchingProp & ModeProp
export type GetCleanMeaningQueryParams = {
    query: QueryProp["query"];
    characters: Character[];
};
export type GetLatestAndSavedResultsAndQueryParams = {
    request: Request;
    potentialResults: ComicCleaned[];
    potentialQuery: QueryProp['query'];
}

export type Character = {
    name: string;
    image: string;
};







// comic types

export type ComicMatch = {
    id: string;
    score?: number;
    values: RecordValues;
    sparseValues?: RecordSparseValues;
    metadata?: ComicMatchMetadata;
}

export type ComicMatchMetadata = {
    filename: string;
    published: string;
    title: string;
    content: string;
}

// passed into getCleanResults from dateSearch
export type ComicLocal = {
    id: string;
    values: number[];
    metadata: ComicMatchMetadata;
}


export type ComicCleaned = {
    id: string;
    metadata: ComicCleanedMetadata;
}

export type ComicCleanedMetadata = {
    filename: string;
    published: string;
    title: string;
}
















