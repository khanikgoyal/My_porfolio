export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold">Hi, I’m Khanik Goyal</h1>
      <p className="text-lg md:text-xl mt-4">
        Backend Developer | ServiceNow Developer
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="/resume.pdf"
          download
          className="bg-white text-black px-6 py-2 rounded shadow"
        >
          Download Resume
        </a>
        <a
          href="mailto:khanikgoyal87@gmail.com"
          className="bg-black px-6 py-2 rounded shadow"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
