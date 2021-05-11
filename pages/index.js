import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function Home() {
    return ( <div>
        <Head>
          <title> WordGifs </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <header className="py-8 absolute left-0 top-0 w-full">
            <div className="container mx-auto">
              <img src="/logo.svg" alt="Flashgifs" className="w-44" />
            </div>
          </header>
          <section className="bg-purple-500 py-44 text-white">
            <div className="container mx-auto"> 
              <h1 className="text-6xl font-bold">Learn vocab faster using gifs.</h1>
              <h2 className="text-3xl mt-6 mb-8">Flashgifs helps visual learners like you remember words in a much faster way.</h2>
              <a target="_blank" href="https://wordgifs.vercel.app/" className="text-base font-bold bg-pink-500 text-white py-4 px-8 rounded inline-block">Start now</a>
            </div>
          </section>
          <section className="bg-gray-100 py-24">
            <div className="container mx-auto">
              <h3 className="text-center font-bold text-4xl">Stay motivated and don't feel overwhelmed</h3>
            </div>
          </section>
          <section className="bg-purple-500 py-24">
            <div className="container mx-auto">
              <h3 className="text-center font-bold text-4xl">You're a visual learner, so vocab gets much easier with gifs</h3>
              <h4 className="text-center text-2xl">Here's how the power of matching words with gifs looks like.</h4>
              <article className="flex flex-grid">
                <img src="/word.png" alt="App screen showing the word Hound" />
                <img src="/pickgif.png" alt="App screen showing gif selection" />
                <img src="/reviewgif.png" alt="App screen showing the word Hound and the selected gif for the word" />
                <img src="/practice.png" alt="App screen showing a gif and a multiple choice of the words hound and pine" />
              </article>
            </div>
          </section>
          <section className="bg-white py-24">
            <div className="container mx-auto">
              <h3 className="text-6xl font-bold">Study from the best lists:</h3>
            </div>
          </section>
          <section className="bg-purple-100 py-24">
            <div className="container mx-auto">
              <h3 className="text-6xl font-bold">Easy transition: just pick up where you've left off</h3>
              <p className="text-3xl">If you've been studying with another tool or list, Flashgifs makes it easy for you to just continue.</p>
            </div>
          </section>
          <section className="bg-gray-100 py-24">
            <div className="container mx-auto">
              <h3 className="text-6xl font-bold">"</h3>
              <p className="text-2xl">I've been using Flashgifs from the early days and I must say it made my learning process not only faster but smoother, less overwhelming, and even enjoyable. </p>
              <span>Michelle</span>
              <span>GRE student from the US</span>
            </div>
          </section>
          <section className="bg-purple-500 py-24">
            <div className="container mx-auto">
              <h3 className="text-6xl font-bold text-white">Learn vocab faster using gifs.</h3>
              <a target="_blank" href="https://wordgifs.vercel.app/" className="text-base font-bold bg-pink-500 text-white py-4 px-8 rounded inline-block">Start now</a>
            </div>
          </section>
        </main>
        <footer className="bg-purple-900 py-16 text-white">
          <div className="container mx-auto">
            <h6>© 2021 Flashgifs by Increscent, Inc.</h6>
            <p>Flashgifs is made with ❤️️ by a remote team.</p>
            <ul>
              <li><a href="">Open the app</a></li>
              <li><a href="">Terms and Conditions</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">hey@flashgifs.com</a></li>
            </ul>
          </div>
        </footer>
      </div>
    )
}