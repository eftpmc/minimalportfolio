import Image from "next/image";
import DarkModeToggle from '../components/DarkModeToggle';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-[var(--color-primary)] text-[var(--color-text-primary)] ">
      <header className="w-full max-w-5xl mx-auto text-center">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/Picture.jpg" // Replace with your avatar image path
              alt="Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-4xl font-bold">Zack Starnes</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="#home" className="text-lg text-[var(--color-text-primary)] hover:text-[var(--color-accent)]">Home</a>
            <a href="#projects" className="text-lg text-[var(--color-text-primary)] hover:text-[var(--color-accent)]">Projects</a>
            <a href="#about" className="text-lg text-[var(--color-text-primary)] hover:text-[var(--color-accent)]">About Me</a>
            <a href="#resume" className="text-lg text-[var(--color-text-primary)] hover:text-[var(--color-accent)]">Resume</a>
          </nav>
        </div>
        <p className="text-xl text-[var(--color-text-secondary)]">Web Developer | Graphic Designer | Creator</p>
      </header>

      <section id="about" className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          I am a self-taught programmer of 8+ years. I started programming games but have since moved to web development. I am attending Clemson in the pursuit of a computer science degree.
        </p>
      </section>

      <section id="projects" className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-4xl font-semibold mb-8">Projects</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-[var(--color-secondary)] p-6 rounded-lg shadow-md">
            <Image
              src="/hhipe.svg"
              alt="HHIPE"
              width={500}
              height={300}
              className="rounded-t-lg"
            />
            <h3 className="text-2xl font-bold mt-4 text-[var(--color-accent)]">HHIPE</h3>
            <p className="text-[var(--color-text-secondary)] mt-2">
              Local parking enforcement company with the goal of improving the parking system. The website was built using Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-4xl font-semibold mb-8">Contact</h2>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          Feel free to reach out to me at <a href="mailto:zackhhi@gmail.com" className="text-blue-500">zackhhi@gmail.com</a>
        </p>
      </section>

      <footer className="w-full mt-16 text-center border-t pt-8 text-[var(--color-text-secondary)]">
        <p>&copy; {new Date().getFullYear()} Zack Starnes. All rights reserved.</p>
        <DarkModeToggle />
      </footer>
    </main>
  );
}
