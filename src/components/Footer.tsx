export default function Footer() {
  return (
    <footer className="py-8 text-center text-zinc-400 bg-black">
      <div className="container">© {new Date().getFullYear()} Liga de Boxeo. All rights reserved.</div>
    </footer>
  );
}