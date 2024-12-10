import type { ReactNode, ComponentProps } from 'react';


export interface Props{
    children?: ReactNode;
    isSearching?: boolean;
    mode?: string;
    query?: string;
    results?: LoaderResults;
}

// type MyComponent1Props = { title: string;
// }
// type MyComponent2Props = { age: number;}
// type MyParentComponentProps = MyComponent1Props & MyComponent2Props & {blah: boolean;}
// const myObject: MyParentComponentProps = {title: "blah"}
function MyComponent (props: {foo: string; bar: number;}){return null}
type MyComponentProps = ComponentProps<typeof MyComponent>

type MyPartenComponentProps = {title: string; age: number;}
type MyComponent1Props = Pick<MyPartenComponentProps, "title" | "age"> 

export interface Character {
    name: string;
    image: string;
  }

export interface Comic {
    id: string;
    metadata: ComicMetadata
}

export interface ComicMetadata {
    filename: string;
    published: string;
    title: number;
    content: string;
}

type myComponentProp = ComicMetadata["title"]

export type LoaderResults = Comic[]

