import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.png'
import logoSentimetric from '@/images/logos/sentimetric.svg'
import logoQc from '@/images/logos/react-qc.svg'
import logoFacebook from '@/images/logos/cosmos.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Work() {
  let work = [
    {
      company: 'react-qc',
      title: 'https://npmjs.com/package/react-qc',
      logo: logoQc,
      start: '',
      end: '',
      chips: ['React', 'TypeScript', 'npm'],
    },
    {
      company: 'مقياس',
      title: 'https://github.com/MuhamadAlfaifi/sentimetric',
      logo: logoSentimetric,
      start: '',
      end: '',
      chips: ['Next.js', 'Tailwind CSS', 'Vercel'],
    },
    {
      company: 'الأرشيف الإلكتروني',
      title: 'https://github.com/MuhamadAlfaifi/documents-indexing-app',
      logo: logoAirbnb,
      start: '',
      end: '',
      chips: ['Laravel', 'Postgres', 'Ploi.io'],
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <SocialLink href="https://github.com/MuhamadAlfaifi" target="_blank" rel="noreferrer" icon={GitHubIcon} />
        <Link href="https://github.com/MuhamadAlfaifi" target="_blank" rel="noreferrer">
          <span className="ml-3">Public Work</span>
        </Link>
      </h2>
      <ol className="mt-6 space-y-4">
        {work.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4 overflow-hidden">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                <a href={role.title} target="_blank" rel="noreferrer" className="hover:underline">
                  {role.title}
                </a>
              </dd>
              <dt className="sr-only">Chips</dt>
              <dd className="flex flex-auto gap-x-2 mt-2">
                {role.chips.map((chip, chipIndex) => (
                  <span
                    key={chipIndex}
                    className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-full px-2 py-0.5"
                  >
                    {chip}
                  </span>
                ))}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const items = [
    { image: image1, href: 'https://sentimetric.vercel.app/', hlble: 'View Sample' }, 
    { image: image2, href: 'https://docs-index.site', hlble: 'View App' }, 
    { image: image3, href: 'https://infolab.tamu.edu', hlble: 'View Site' }
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex lg:justify-center px-6 gap-5 overflow-scroll py-4 sm:gap-8">
        {items.map((item, imageIndex) => (
          <div className="relative">
            <div
              key={item.image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl border border-zinc-200 dark:border-none',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={item.image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <a href={item.href} target="_blank" rel="noreferrer" className={clsx(
              'block mx-auto w-max mt-2 dark:text-zinc-100 hover:underline',
              rotations[imageIndex % rotations.length]
            )}>
              <span>{item.hlble}</span>
              {/* arrow top right */}
              <ArrowDownIcon className="h-4 w-4 inline-block ml-1 rotate-[225deg] dark:stroke-zinc-100" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Muhamad Alfaifi - Software engineer
        </title>
        <meta
          name="description"
          content="I’m Muhamad, a software engineer and entrepreneur, i work on SaaS products."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Software engineer and UX Enthusiast
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Muhamad Alfaifi, a Software engineer with a deep proficiency in 
            JavaScript, React. My passion for 
            UI/UX design complements my technical expertise. <br />
            I’m eager to share my work and journey!
          </p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
            {/* <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532 532" className="w-full h-full">
                <circle cx="270.76" cy="260.93" r="86.35" fill="#ffb6b6"/>
                <path fill="#ffb6b6" d="m221.19 360.05-3.9-39.43 77.9-14.57 46 112-80 92-57-112 17-38z"/>
                <path fill="#2f2e41" d="m216.04 340.36 17.03 3.85s-13.39-42.46-8.85-46.51c4.55-4.06 15.68 2.33 15.68 2.33l11.7 13.12 14.26-14.51s15.48-19.24 21.53-24.65-3.67-25.46-3.67-25.46 89.9-24.24 56.44-67.84c0 0-19.6-34.19-26-23.05-6.38 11.14-14-6.55-14-6.55l-23.25 4.42s-45.9-27.06-89.45 30.83c-43.56 57.9 28.58 154.02 28.58 154.02Z"/>
                <path fill="#00bfa6" d="M433.16 472.95C385.97 511.21 327.59 532 266 532c-56.24 0-109.81-17.34-154.62-49.48l.23-2.5c1.19-13 2.25-25.64 2.95-36.12 2.71-40.69 97.64-67.81 97.64-67.81s.43.43 1.29 1.18c5.24 4.6 26.51 21.28 63.81 25.94 33.26 4.16 44.21-15.57 47.52-25.02 1-2.88 1.3-4.81 1.3-4.81l97.64 46.11c6.37 9.1 8.86 28.7 9.35 50.73l.05 2.73Z"/>
                <path fill="#3f3d56" d="M454.09 77.91C403.85 27.67 337.05 0 266 0S128.15 27.67 77.91 77.91C27.67 128.15 0 194.95 0 266c0 64.85 23.05 126.16 65.29 174.57a267.43 267.43 0 0 0 33.88 32.64l.08.07c3.97 3.2 8.01 6.28 12.13 9.24C156.19 514.66 209.76 532 266 532c61.59 0 119.97-20.79 167.16-59.05a272.4 272.4 0 0 0 31.76-30.34C508.29 393.89 532 331.77 532 266c0-71.05-27.67-137.85-77.91-188.09Zm10.18 362.21a264.23 264.23 0 0 1-31.16 30.1 263.36 263.36 0 0 1-72.83 42.38A262.62 262.62 0 0 1 266 530a262.7 262.7 0 0 1-153.63-49.43l-.76-.55a254.6 254.6 0 0 1-21.47-17.3 265.83 265.83 0 0 1-24.24-24.71A262.82 262.82 0 0 1 2 266C2 120.43 120.43 2 266 2s264 118.43 264 264a262.84 262.84 0 0 1-65.73 174.12Z"/>
              </svg>
            </div> */}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Work />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
