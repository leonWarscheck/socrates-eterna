import type { ReactNode, ComponentProps } from 'react';


export type ModeProp = { mode: string }
export type IsSearchingProp = { isSearching: boolean }
export type ChildrenProp = { children: ReactNode }
export type QueryProp = { query: string }
export type ResultsProp = { results: Comic[] }

export type ModeBarProps = IsSearchingProp & QueryProp
export type SearchComponentParentProps = ChildrenProp & IsSearchingProp & ModeProp
export type GetCleanMeaningQueryParams = {
    query: QueryProp["query"];
    characters: Character[];
};
export type GetLatestAndSavedResultsParams = {
    request: Request;
    potentialResults: Comic[];
    potentialQuery: QueryProp['query'];
}

export type Character = {
    name: string;
    image: string;
};
export type Comic = {
    id: string;
    metadata: ComicMetadata;
};

export type ComicMetadata = {
    filename: string;
    published: string;
    title: string;
    content: string;
};






























export interface Props {
    children?: ReactNode;
    isSearching?: boolean;
    mode?: string;
    query?: string;
}

// type MyComponent1Props = { title: string;
// }
// type MyComponent2Props = { age: number;}
// type MyParentComponentProps = MyComponent1Props & MyComponent2Props & {blah: boolean;}
// const myObject: MyParentComponentProps = {title: "blah"}
function MyComponent(props: { foo: string; bar: number; }) { return null }
type MyComponentProps = ComponentProps<typeof MyComponent>

type MyPartenComponentProps = { title: string; age: number; }
type MyComponent1Props = Pick<MyPartenComponentProps, "title" | "age">



