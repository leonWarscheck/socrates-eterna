```js
import { json, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { Form, Link, useLoaderData, useSearchParams } from '@remix-run/react';


export function getSearchParams(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get('mode') || 'meaning';
  const character = url.searchParams.get('character') || '';
  const meaning = url.searchParams.get('meaning') || '';
  const date = url.searchParams.get('date') || '';

  return { character, mode, meaning, date };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { character, mode, meaning, date } = getSearchParams(request);

  if (date || meaning || character) {
    const params = new URLSearchParams(
      Object.fromEntries(
        Object.entries({ meaning, date, mode, character }).filter(
          ([_, value]) => value,
        ),
      ),
    );
    return redirect(`/results?${params.toString()}`);
  }

  return json({ mode });
}

export default function Comic() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const mode = searchParams.get('mode') || 'meaning';

  // const handleModeChange = (newMode: string) => {
  //   setSearchParams({ mode: newMode });
  // };

  const { mode } = useLoaderData<typeof loader>();

  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Comic Search</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-4">
            <Label>Search Mode</Label>

            <div className="mt-2 flex space-x-2">
              {/* <Button
                onClick={() => handleModeChange('meaning')}
                variant={mode === 'meaning' ? 'default' : 'outline'}
              >
                Meaning
              </Button>

              <Button
                onClick={() => handleModeChange('date')}
                variant={mode === 'date' ? 'default' : 'outline'}
              >
                Date
              </Button>

              <Button
                onClick={() => handleModeChange('character')}
                variant={mode === 'character' ? 'default' : 'outline'}
              >
                Character
              </Button> */}

              <Button
                asChild
                variant={mode === 'meaning' ? 'default' : 'outline'}
              >
                <Link to={`?mode=meaning`}>Meaning</Link>
              </Button>

              <Button asChild variant={mode === 'date' ? 'default' : 'outline'}>
                <Link to={`?mode=date`}>Date</Link>
              </Button>

              <Button
                asChild
                variant={mode === 'character' ? 'default' : 'outline'}
              >
                <Link to={`?mode=character`}>Character</Link>
              </Button>
            </div>
          </div>

          <Form replace>
            <input type="hidden" name="mode" value={mode} />

            {mode === 'meaning' && (
              <div className="mb-4">
                <Label htmlFor="meaning">Comic meaning</Label>
                <Input type="search" name="meaning" id="meaning" />
              </div>
            )}

            {mode === 'character' && (
              <div className="mb-4">
                <Label htmlFor="character">Comic character</Label>
                <Input type="search" name="character" id="character" />
              </div>
            )}

            {mode === 'date' && (
              <div className="mb-4">
                <Label htmlFor="date">Date</Label>
                <Input type="date" name="date" id="date" />
              </div>
            )}

            <Button type="submit">Search</Button>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
```