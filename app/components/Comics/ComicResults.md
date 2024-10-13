```js
import { useLoaderData } from '@remix-run/react';
import { getSearchParams } from './comic';
import { json, LoaderFunctionArgs } from '@remix-run/node';



export async function loader({ request }: LoaderFunctionArgs) {
  const { mode, meaning, character, date } = getSearchParams(request);

  return json({ mode, meaning, character, date });
}

export default function Results() {
  const { meaning, character, date, mode } = useLoaderData<typeof loader>();

  return (
    <div>
      {mode === 'meaning' && <div>Meaning: {meaning}</div>}
      {mode === 'character' && <div>Character: {character}</div>}
      {mode === 'date' && <div>Date: {date}</div>}
    </div>
  );
}
```