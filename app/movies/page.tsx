import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Suspense } from 'react'
import { genPageMetadata } from '~/app/seo'
import { Container } from '~/components/ui/container'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { PageHeader } from '~/components/ui/page-header'
import { SITE_METADATA } from '~/data/site-metadata'
import { convertKeysToCamelCase } from '~/utils/data-transform'
import { MoviesList } from './movies-list'

export let metadata = genPageMetadata({ title: 'My movies list' })

type Movie = {
  id: string
  const: string
  yourRating: string
  dateRated: string
  title: string
  originalTitle: string
  url: string
  titleType: string
  imdbRating: string
  runtime: string
  year?: string
  genres: string
  numVotes: string
  releaseDate: string
  directors: string
  actors: string
  plot: string
  poster: string
  language: string
  country: string
  awards: string
  boxOffice?: string
  totalSeasons?: string
  ratings: Array<{ value: string; source: string }>
}

export default function MoviesPage() {
  let movies: Movie[] = []
  try {
    const moviesJsonPath = join(process.cwd(), 'json', 'movies.json')
    const moviesData = readFileSync(moviesJsonPath, 'utf-8')
    const rawMovies = JSON.parse(moviesData)
    movies = convertKeysToCamelCase(rawMovies, {
      fieldMappings: { const: 'id' },
    }) as Movie[]
  } catch (error) {
    console.error('Error loading movies:', error)
  }

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Movies"
        description={
          <>
            <p>
              This is where I log all the movies and TV series I’ve watched. I’m
              a huge fan of <span className="font-medium">Tom Hanks</span> and{' '}
              <span className="font-medium">Christopher Nolan</span>, so expect
              to see a lot of them in the top spots! Anything I’ve rated 10
              stars is something I absolutely love and have probably rewatched
              many times (highly recommended). Take a look and maybe find your
              next favorite film!
            </p>
            <p className="mt-3 italic">
              *Data is exported from my{' '}
              <Link
                href={SITE_METADATA.imdbRatingsList}
                className="font-medium"
              >
                <GrowingUnderline data-umami-event="goodreads-feed" active>
                  IMDB ratings list
                </GrowingUnderline>
              </Link>
              , with extra details pulled in from the{' '}
              <Link href="https://www.omdbapi.com/" className="font-medium">
                <GrowingUnderline data-umami-event="goodreads-feed" active>
                  OMDB API
                </GrowingUnderline>
              </Link>{' '}
              for a more complete look at each movie.
            </p>
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-5 md:py-10">
        <Suspense>
          <MoviesList movies={movies} />
        </Suspense>
      </div>
    </Container>
  )
}
