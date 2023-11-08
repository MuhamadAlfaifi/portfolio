import { Fragment, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                <MobileNavItem href="/uses">Uses</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/speaking">Speaking</NavItem>
        <NavItem href="/uses">Uses</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-max w-max rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {

  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <div className="flex items-center w-max">
        {/* <Image
          src={avatarImage}
          alt=""
          sizes={large ? '4rem' : '2.25rem'}
          className={clsx(
            'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 align-middle',
            large ? 'h-16 w-16' : 'h-9 w-9'
          )}
          priority
        /> */}
        <svg
          className={`md:transform md:scale-125 md:origin-top-left mt-6`}
          width="200"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>
            {`
            @keyframes draw {
              to {
                transform: translateX(100%);
              }
            }
          
            #mask-rect {
              animation: draw 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) 0.8s forwards;
            }
          `}
          </style>
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white"/>
            <rect id="mask-rect" x="0%" y="0" width="100%" height="100%" fill="black"/>
          </mask>
          <defs>
            <g id="text">
              <path d="M140.3 15.8h-5.1l-1.3 4.9h-4.3l5.6-19h5.3l5.7 19h-4.5l-1.4-5zm-4.6-3.2h4l-1-4-1-3.8-.9 3.7-1 4zM66.4 12.5v4.9l.1 3.3H63l-.3-1.3a4.6 4.6 0 01-3.8 1.7c-2.6 0-4.2-2-4.2-4.3 0-3.6 3-5.4 7.7-5.4v-.2c0-.7-.4-1.8-2.4-1.8a7 7 0 00-3.6 1.1l-.8-2.8c1-.5 2.7-1.2 5.1-1.2 4.4 0 5.8 2.7 5.8 6zm-4 3.2v-1.5c-2.1 0-3.8.5-3.8 2.2 0 1 .7 1.6 1.6 1.6 1 0 1.9-.7 2.1-1.6l.1-.7zM103.7 12.5v4.9l.1 3.3h-3.6l-.2-1.3h-.1A4.6 4.6 0 0196 21c-2.6 0-4.2-2-4.2-4.3 0-3.6 3-5.4 7.7-5.4v-.2c0-.7-.4-1.8-2.4-1.8a7 7 0 00-3.6 1.1l-.7-2.8c.9-.5 2.7-1.2 5-1.2 4.4 0 5.8 2.7 5.8 6zm-4 3.2v-1.5c-2.1 0-3.8.5-3.8 2.2 0 1 .7 1.6 1.6 1.6 1 0 1.9-.7 2.1-1.6l.1-.7zM175.6 12.5v4.9c0 1.3 0 2.6.2 3.3H172l-.2-1.3h-.1A4.6 4.6 0 01168 21c-2.7 0-4.3-2-4.3-4.3 0-3.6 3-5.4 7.7-5.4v-.2c0-.7-.4-1.8-2.4-1.8a7 7 0 00-3.6 1.1l-.7-2.8c.9-.5 2.7-1.2 5-1.2 4.4 0 5.8 2.7 5.8 6zm-4 3.2v-1.5c-2.1 0-3.8.5-3.8 2.2 0 1 .7 1.6 1.6 1.6 1 0 1.9-.7 2.2-1.6v-.7zM115.6 0h4.3v16.8l.1 4.3h-3.8L116 19a4.7 4.7 0 01-4.4 2.5c-3.2 0-5.8-3-5.8-7.5 0-5 2.8-7.7 6.1-7.7 1.7 0 3 .6 3.7 1.6V0zm0 14.6v-1.9-.8c-.3-1.2-1.2-2.2-2.5-2.2-2 0-3 1.9-3 4.1 0 2.5 1.2 4 3 4 1.2 0 2.1-.8 2.4-2.1l.1-1zM160 20.7h-4V10h-1.8V6.9h1.8v-.5c0-1.7.4-3.5 1.6-4.6 1-1 2.5-1.4 3.7-1.4.9 0 1.6.1 2.2.3l-.2 3.3-1.3-.2c-1.4 0-2 1-2 2.4V7h2.7v3.2h-2.6v10.6zM190.9 20.7h-4.2V10H185V6.9h1.7v-.5c0-1.7.5-3.5 1.7-4.6 1-1 2.5-1.4 3.6-1.4 1 0 1.7.1 2.2.3 1 .5 1.5.9 1.4 1 0 .5.2 1.4-.3 2 0 .2-.5.3-1.2.3l-1.4-.2c-1.3 0-1.9 1-1.9 2.4V7h2.7v3.2h-2.6v10.6zM39.6 20.7V.4h4.2v8a4.7 4.7 0 013.8-2c2.7 0 4.7 2 4.7 6.1v8.2h-4.2V13c0-1.8-.6-3.1-2.1-3.1-1.1 0-1.8.7-2 1.5-.2.3-.2.7-.2 1v8.3h-4.2zM148 20.7V.4h4.3v20.3zM69.7 21v-9.4-4.4H73l.1 1.9h.1c.6-1 1.8-2.2 4-2.2 1.7 0 3 .9 3.6 2.3.6-.7 1.2-1.2 1.8-1.6.7-.5 1.5-.7 2.5-.7 2.5 0 4.4 1.9 4.4 6v8.2h-4v-7.6c0-2-.6-3.2-2-3.2-.8 0-1.5.7-1.8 1.5l-.2 1.2v8h-4v-7.7c0-1.8-.5-3-1.8-3-1 0-1.7.9-2 1.6a3 3 0 000 1v8.2h-4zM36.4 6.9v9.4l.1 4.5H33l-.2-2h-.1c-.5.8-1.8 2.3-4.2 2.3-2.7 0-4.7-1.8-4.7-6V6.8H28v7.4c0 2 .6 3.3 2 3.3 1.2 0 1.9-.8 2.1-1.5l.2-1V7h4.1zM5.2 20.7l.2-7.3.2-7.9 2 7.4 2.3 7.4H13l2-7.3 1.6-7.5.3 8 .4 7.2h3.8L20 1.7h-5.5L12.8 8c-.6 2.2-1.2 4.6-1.6 6.8L9.4 7.9 7.5 1.6H2.1l-1 19h4zM179 20.7h4V6.8h-4v13.9zm2-19.9c-1.3 0-2.1 1-2.2 2.2A2 2 0 00181 5a2 2 0 002-2.1c.1-1.3-.7-2.2-2-2.2z" />
              <path d="M194.7 20.7h4V6.8h-4v13.9zm2-19.9c-1.2 0-2 1-2 2.2a2 2 0 002 2.1 2 2 0 002.1-2.1c0-1.3-.8-2.2-2-2.2z" />
            </g>
            <path id="underline" mask="url(#mask)" d="M6.3 27c-1 0-1.3.2-2.7-.2-.8-.3-2-.2-3.3.2l-.3.4.3.2v.3l.1.3V29.8l.1.2H.4l.2.3v.4l.1.2v.2l.1.3.1.4.4.2H2l1.7-.4c.9-.1 1.9.3 2.7.2a778 778 0 009.6-.9h3.3c.9 0 4.4 0 6.3-.2a78 78 0 018.3-.2l3-.2h3l5.7-.1h6.7l8.6-.2h4.3l6.8-.1 5.4-.1h4.9l3-.1 12.4-.3c-6.1-.2 0-.1 18.2.2 4.6.1 8.6-.4 14.5-.2l21.6.7c3.4.1 7.5-.2 13.6 0l10.3.5 8.6.3 8 .4c1 0 2.7-.2 4.6 0 .8.1 1.4.5 2 .5.6 0 .3-.3.3-.4 0-.2.4-.2.4-.3v-.6c0-.2-.4-.3-.4-.4 0-.2.4-.4.4-.5 0-.6-.1-.7-.4-.4.3-.2.4-.4.4-.5l-.4-.2.3-.1v-.2l-.3-.1c0-.2.3-.4.4-.5l.3-.2v-.2c0-.4-.1-.6-.3-.5h-.8a24.2 24.2 0 01-1.2 0h-9.5c-10.1-.6-17-.9-20.7-.9-5.7 0-18.8-.6-25.5-.7a3848.7 3848.7 0 00-58.2.2l-20.1-.2c-4.9 0-13 .3-24.6.6l-9.2.1-5.4.5H19L6.3 27z" />
          </defs>
          <g fill="none" fillRule="evenodd">
            <use className="fill-zinc-950 dark:fill-zinc-100" fillRule="nonzero" xlinkHref="#text" />
            <use className="fill-teal-500" fillRule="evenodd" xlinkHref="#underline" />
          </g>
        </svg>
      </div>
    </Link>
  )
}

export function Header() {
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{ position: 'var(--header-position)' }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: 'var(--header-inner-position)' }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 top-3 origin-left transition-opacity"
                    style={{
                      opacity: 'var(--avatar-border-opacity, 0)',
                      transform: 'var(--avatar-border-transform)',
                    }}
                  />
                  <Avatar
                    large
                    className="block h-16 w-16 origin-left"
                    style={{ transform: 'var(--avatar-image-transform)' }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: 'var(--header-position)' }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <>
                  <AvatarContainer />
                  <Avatar />
                  </>
                )}
              </div>
              {/* <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div> */}
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
