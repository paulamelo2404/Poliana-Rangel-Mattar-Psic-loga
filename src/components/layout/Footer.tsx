interface FooterProps {
  name: string;
  crp: string;
}

const Footer = ({ name, crp }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-gray-400 mb-4">{crp}</p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;