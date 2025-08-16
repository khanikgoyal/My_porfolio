export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold">Hi, I’m Khanik Goyal</h1>
      <p className="text-xl mt-4">Node.js Developer | ServiceNow Developer</p>
      <div className="mt-6 flex gap-4">
        <a href="/resume.pdf" download className="bg-white text-black px-4 py-2 rounded">
          Download Resume
        </a>
        <a href="mailto:khanikgoyal87@gmail.com" className="bg-black px-4 py-2 rounded">
          Contact Me
        </a>
      </div>
    </section>
  );
}
