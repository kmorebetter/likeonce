import React from 'react'
import Link from 'next/link'
import NavIcon from '@/components/NavIcon'

export default function Home(): React.ReactElement {
  return (
    <div className="space-y-16">
      <nav className="flex gap-12">
        <Link href="/" className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity">
          <NavIcon src="/icons/once.svg" />
          <span className="font-narrow">ONCE</span>
        </Link>
        <Link href="/campfire" className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity">
          <NavIcon src="/icons/campfire.svg" />
          <span className="font-narrow">Campfire</span>
        </Link>
        <Link href="/writebook" className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity">
          <NavIcon src="/icons/writebook.svg" />
          <span className="font-narrow">Writebook</span>
        </Link>
      </nav>

      <article className="prose prose-lg max-w-none">
        <h1 className="font-narrow text-4xl font-bold !mt-0 !mb-6">Something happened to business software.</h1>
        
        <p>
          You used to pay for it once, install it, and run it. Whether on someone's computer, or a server for everyone, it felt like you owned it. And you did.
        </p>

        <p>
          Today, most software is a service. Not owned, but rented. Buying it enters you into a perpetual landlord–tenant agreement. Every month you pay for essentially the same thing you had last month. And if you stop paying, the software stops working. Boom, you're evicted.
        </p>

        <p>
          For nearly two decades, the SaaS model benefitted landlords handsomely. With routine prayers — and payers — to the Church of Recurring Revenue, valuations shot to the moon on the backs of businesses subscribed at luxury prices for commodity services they had little control over.
        </p>

        <p className="font-semibold">
          Add up your SaaS subscriptions last year. You should own that shit by now.
        </p>

        <p>
          SaaS still makes sense for many products, but its grip will slip. Installation and administration used to be hopelessly complicated, but self–hosting tech is simpler now and vastly improved. Plus, IT departments are hungry to run their own IT again, tired of being subservient to Big Tech's reign clouds.
        </p>

        <p>
          Once upon a time you owned what you paid for, you controlled what you depended on, and your privacy and security were your own business. We think it's that time again.
        </p>

        <p>
          Introducing ONCE, a new line of software products from <a href="https://37signals.com" className="text-blue-600 hover:underline">37signals</a>.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Pay one time, own forever.</li>
          <li>We write the code, you get to see it.</li>
          <li>We give you the software, you get to host it.</li>
          <li>Simple and straightforward, not enterprisey and bloated.</li>
          <li>For one fixed price. Once.</li>
        </ul>

        <p>So far there are two ONCE products:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/campfire" className="text-blue-600 hover:underline">Campfire</Link>: A group chat system similar to Slack or Teams, but simpler.</li>
          <li><Link href="/writebook" className="text-blue-600 hover:underline">Writebook</Link>: The easiest way on earth to publish a book online.</li>
        </ul>

        <div className="space-x-4">
          <Link href="/campfire" className="text-blue-600 hover:underline">Campfire</Link>
          <Link href="/writebook" className="text-blue-600 hover:underline">Writebook</Link>
        </div>

        <p>
          In the early 2000s, we were among the early pioneers leading the industry into the SaaS revolution. Now, 20 years later, we intend to help lead the way out. The post–SaaS era is just around the corner.
        </p>

        <p>Stay tuned.</p>

        <p><a href="mailto:jason@37signals.com" className="text-blue-600 hover:underline">jason@37signals.com</a></p>

        <footer className="text-sm text-gray-600 mt-12">
          ONCE™ products are designed, built, and backed by 37signals™. Copyright 37signals LLC. All rights reserved. Anyone buying, using, or receiving a ONCE™ product is subject to our <Link href="/license" className="text-blue-600 hover:underline">software license agreement</Link>.
        </footer>
      </article>
    </div>
  )
}