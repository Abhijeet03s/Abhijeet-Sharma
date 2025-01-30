import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="space-y-4 md:space-y-6">
        <p className="text-sm md:text-base font-mono leading-relaxed text-gray-300">
          Hey, I&apos;m Abhijeet. I&apos;m a Frontend Engineer fascinated by bringing ideas to life on screen.
          I&apos;ve spent countless hours chasing the perfect shade of blue 🎨, only to tweak it the next day.
          For me, it&apos;s all about experimenting, iterating, and creating interfaces that make you go, &apos;Whoa!&apos;
          And when I&apos;m not tweaking pixels, you&apos;ll probably find me chasing headshots in an FPS game. 🎯🎮
        </p>
      </div>
      <Experience />
    </div>
  );
}
