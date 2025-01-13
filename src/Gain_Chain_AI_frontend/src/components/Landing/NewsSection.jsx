import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function NewsSection() {
  return (
    <div className="relative isolate overflow-hidden bg-blue-600 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-white">
              Stay updated with the latest news, tips, and insights. No spam, just valuable content.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white text-blue-600 placeholder-blue-300 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-blue-300 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-blue-300">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 text-base text-white">
                Stay informed with our weekly newsletter, covering the latest trends and insights.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-blue-300">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-base text-white">
                We value your privacy and only send relevant, high-quality content. No unnecessary emails.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-600 to-blue-500 opacity-30"
        />
      </div>
    </div>
  );
}
