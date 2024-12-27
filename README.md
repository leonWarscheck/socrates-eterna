# Socrates Eterna

A comic search engine using AI generated vectors/ embeddings. It can find comics by related meaning rather than having to match exact keywords. 

For example:
- 'cigar' finds a comic about Fidel Castro / Cuba
- 'branding' finds a comic about Ghandi developing his 'peaceful resistance' message
- 'universe' finds a comic about Galileo Galilei observing the galaxy
- 'health' finds a comic about physical training

![screen-recording of meaning search terms in action](public/main/meaning-search-screen-recording.gif)


The search enginge works, eventhough none of the search terms are contained in the actual scripts of the comics. That's because it creates mathematical representations from the scripts and your query and then compares their "numerical distance". The closer the distance the more a comic and a search term are related by meaning. 

You could even describe what you are looking for in full sentences, but single words are often enough already.



Explore the meaning-based search in action: [socrates-eterna.com/comics/meaning](https://socrates-eterna.com/comics/meaning)