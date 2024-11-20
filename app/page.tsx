import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
    </main>
  )
}

// compound pattern
// type A = (b: number) => string | null;
// type B = ReturnType<A>;
// infer
// TS
// TS complex types
// trebuie sa fii vesel, increzut...
// var, let, const, hoising, clojure,
// Task: 1.5h Fetch a list of text, find only the text inside <p></p> and apply text to voice for the content inside of it and hightlight the current word

type A = (str: string) => number
// type B = ReturnType<A>;
// type C =  (T extends any) => infer R;

type B<T> = T extends number ? T : any
type C<T> = T extends (...args: never) => infer T ? T : unknown

const a: B<string> = '123'
const b: B<number> = 123

const fn1 = (a: number) => '123'
const fn2 = (a: number) => a

type aaa = typeof fn1
type a1 = C<typeof fn1>
type a2 = C<typeof fn2>

type a3 = C<string>

const abc: C = () => {}
const abcd: ReturnType<() => string>

type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any
type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never
type UnboxArray<T extends Array<any>> = T extends Array<infer R> ? R : any

const a312 = [1, 2]
type a543 = UnboxArray<typeof a312>

// marketplace similar to ...
// A lot of categoreis and filters
// Realtime chat in the app
// Implement AI
// Version management
// CI/CD integrated at the beggining
// Docker and jenkins
// AWS stuff
// Backend
// Migrations
//
