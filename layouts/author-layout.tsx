import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { SocialAccounts } from '~/components/author/social-accounts'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="About"
        description="A bit of background on who I am, what I do, and why I started this blog. Nothing too serious, just a little intro to the person typing away behind the scenes."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8">
        <div className="prose prose-lg max-w-full dark:prose-invert">
          {/* About Me Section */}
          <section>
            <h2 className="mt-0">About Me</h2>
            <div>
              <h3 className="mt-0">
                Hi there <Twemoji emoji="waving-hand" />
              </h3>
              <p>
                I'm <strong>Fynn</strong>, a software engineer from{' '}
                <strong>China</strong>. I have a passion for all things{' '}
                <strong>Javascript</strong>. I enjoy building user products
                software and stuff related to web dev. I work mainly with{' '}
                <strong>Typescript</strong>, <strong>Vue</strong>,{' '}
                <strong>React</strong>, <strong>NodeJS</strong>, and{' '}
                <strong>TailwindCSS</strong>.
              </p>
              {/* <p>
                I would greatly appreciate any comments and thoughts on my posts{' '}
                <Twemoji emoji="clinking-beer-mugs" />.
              </p> */}
            </div>
            <div>
              <div className="mt-[2em] mb-[1em] flex items-center justify-between [&>h3]:my-0">
                <h3>My career</h3>
              </div>
              <CareerTimeline />
            </div>
            <div>
              <h3>Contact</h3>
              <p>
                Reach out to me at{' '}
                <a href={`mailto:${SITE_METADATA.email}`}>
                  {SITE_METADATA.email}
                </a>{' '}
                or find me on social media:
              </p>
              <SocialAccounts />
            </div>
          </section>

          {/* About This Blog Section */}
          <section className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <h2 className="mt-0">About This Blog</h2>
            <div>
              <h3>Motivation</h3>
              <blockquote>
                <p>Sharing is learning!</p>
              </blockquote>
              <p>
                This blog serves as a journal for documenting and sharing the
                insights and knowledge I've gained as a software engineer.
                Building, writing, and sharing things is a great way for me to
                solidify my understanding of new concepts and ideas.
              </p>
            </div>
            <div>
              <h3>Features</h3>
              <ul>
                <li>
                  <Twemoji emoji="atom-symbol" /> <strong>Next.js 15</strong>{' '}
                  (App Router) and <strong>React 19</strong>.
                </li>
                <li>
                  <Twemoji emoji="artist-palette" />{' '}
                  <strong>Tailwind CSS</strong> for styling.
                </li>
                <li>
                  <Twemoji emoji="safety-vest" /> <strong>TypeScript</strong>{' '}
                  for better type safety.
                </li>
                <li>
                  <Twemoji emoji="open-book" />{' '}
                  <a
                    href="https://contentlayer.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contentlayer
                  </a>{' '}
                  & MDX for blogs and snippets data.
                </li>
                <li>
                  <Twemoji emoji="card-file-box" /> Database hosting on{' '}
                  <a
                    href="https://supabase.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                  .
                </li>
                <li>
                  <Twemoji emoji="building-construction" /> Type-safe database
                  operations using{' '}
                  <a
                    href="https://orm.drizzle.team/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Drizzle ORM
                  </a>
                  .
                </li>
                <li>
                  <Twemoji emoji="hammer-and-wrench" /> Code linting and
                  formatting with{' '}
                  <a
                    href="https://biomejs.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Biome
                  </a>
                  .
                </li>
                <li>
                  <Twemoji emoji="first-quarter-moon" /> Dark mode theme colors
                  with{' '}
                  <a
                    href="https://github.blog/changelog/2021-04-14-dark-and-dimmed-themes-are-now-generally-available/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub dark dimmed
                  </a>
                  .
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}
