import "./Footer.css";

export default function Footer() {
  return (
    <footer className="px-6 py-6 border-t border-white text-center text-gray-200 text-sm">
      © {new Date().getFullYear()} • Reginaldo Ytalo. Todos os direitos
      reservados.
    </footer>
  );
}
