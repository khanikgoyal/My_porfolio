export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white text-center">
      <p>© {new Date().getFullYear()} Khanik Goyal | 
        <a href="https://github.com/khanikgoyal" className="ml-2 underline">GitHub</a>
      </p>
    </footer>
  );
}
