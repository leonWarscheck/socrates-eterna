import { LoaderFunctionArgs } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { useState } from 'react';

import { Button } from '~/components/button';
import { Input } from '~/components/input';
import { Label } from '~/components/label';

function getDateSearch(request: Request) {
  const url = new URL(request.url);
  const contactType = url.searchParams.get('contact-type') || 'email';
  const search = url.searchParams.get(contactType);
  return search;
}

export function loader({ request }: LoaderFunctionArgs) {
  const search = getDateSearch(request);

  return { search };
}

export default function Component() {
  const { search } = useLoaderData<typeof loader>();
  const [contactType, setContactType] = useState<'email' | 'username'>('email');

  return (
    <main className="p-4">
      <h1>Results for {search}</h1>

      <Form className="space-y-2">
        <div className="space-y-2">
          <div>
            <Label htmlFor="contact-type">Contact Type</Label>

            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contact-type"
                  value="email"
                  checked={contactType === 'email'}
                  onChange={() => setContactType('email')}
                />

                <span className="ml-2">Email</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="contact-type"
                  value="username"
                  checked={contactType === 'username'}
                  onChange={() => setContactType('username')}
                />

                <span className="ml-2">Username</span>
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email ..."
              disabled={contactType !== 'email'}
            />
          </div>

          <div>
            <Label htmlFor="username">Username</Label>

            <Input
              id="username"
              name="username"
              placeholder="Your username ..."
              disabled={contactType !== 'username'}
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </main>
  );
}