# Socrates Eterna

A comic search engine using AI generated vectors/ embeddings. It can find comics by related meaning rather than having to match exact keywords.

For example:

- 'cigar' finds a comic about Fidel Castro / Cuba
- 'branding' finds a comic about Ghandi developing his 'peaceful resistance' message
- 'universe' finds a comic about Galileo Galilei observing the galaxy
- 'health' finds a comic about physical training

![screen-recording of meaning search terms in action](public/main/meaning-search-screen-recording.gif)

The search enginge works, **eventhough none of the search terms are contained in the actual scripts of the comics**.

That's because it creates mathematical representations from the scripts and your query and then compares their "mathematical distance". The closer the distance the more a comic and a search term are related by meaning.

You could even describe what you are looking for in full sentences, but single words are often enough already.

Explore the meaning-based search in action: [socrates-eterna.com/comics/meaning](https://socrates-eterna.com/comics/meaning)

## Core Engine



You can find the core search engine and results processing in:

```
/app/features/comics-pages/search-logic/
├── ...
├── get-pinecone-results.server.ts
├── get-query-embeddings.server.ts
├── search-helpers.server.ts
└── semantic-search-logic.ts
```

...which are implemented in:

```
/app/routes/
├── ...
└── results.meaning.tsx
```

## Explore the Codebase

The best way to explore the codebase is to open it as a codespace at:

https://solid-meme-g44rxwpx677gcvr66.github.dev/

There you have an instant, full IDE in your browser, including:

- `cmd + click` navigation to function definitions etc.
- TSDoc comments on hovering
- Type Information on hovering
- full search functionality