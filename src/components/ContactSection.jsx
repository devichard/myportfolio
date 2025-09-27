import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
    

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/ContactSection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }

      /*if (!response.ok) throw new Error("Erro ao enviar mensagem");

      alert("Mensagem enviada com sucesso!")
      e.target.reset();
     catch (err) {
      alert("Erro: " + err.message); */
    }
    

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Soluções? <span className="text-primary">Arthur</span>.
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Entre em contato para batermos um papo, transformar ideias em negócios
          ou até mesmo falar sobre oportunidades de desenvolvimento!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Informações para contato
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:arthurrichard66@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    arthurrichard66@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <a
                    href="tel:+5561999550208"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (61) 9 9955 0208
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Brasília - DF, Brasil
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Vamos nos conectar!</h4>
              <div className="flex space-x-4 justify-center mb-5">
                <a
                  className="hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/arthurrchard"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://www.instagram.com/arthurrchard"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Arthur Richard..."
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="seuemail@gmail.com..."
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Mensagem
                </label>
                <input
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Olá! Gostaria de falar com você sobre..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Enviar
                <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
