import { useState, FormEvent } from 'react';
import imagen1 from './assets/Imagen1.png';
import imagen2 from './assets/Imagen2.png';
import imagen3 from './assets/Imagen3.png';
import imagen4 from './assets/Imagen4.png';
import {
  Menu,
  X,
  Cpu,
  Code,
  Zap,
  Lightbulb,
  Send,
  Github,
  Twitter,
  Linkedin,
  ChevronRight,
  Bot,
  Sparkles
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formDataObj = new FormData(form);
  const params = new URLSearchParams();

  formDataObj.forEach((value, key) => {
    params.append(key, String(value));
  });

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    alert("Mensaje enviado correctamente");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    alert("Hubo un error al enviar el formulario");
  }
};

  const projects = [
    {
      title: 'Robot Seguidor de Línea',
      description: 'Un robot autónomo que utiliza sensores infrarrojos para seguir una línea negra sobre superficie blanca.',
      icon: Bot
    },
    {
      title: 'Sistema de Luces Automáticas',
      description: 'Control inteligente de iluminación usando sensores de movimiento y luz ambiental para eficiencia energética.',
      icon: Lightbulb
    },
    {
      title: 'Semáforo con Arduino',
      description: 'Simulación de un sistema de tráfico con LEDs, tiempos programables y control de flujo vehicular.',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">TechLearn</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-cyan-400 transition">Inicio</button>
              <button onClick={() => scrollToSection('robotica')} className="text-gray-300 hover:text-cyan-400 transition">Robótica</button>
              <button onClick={() => scrollToSection('computacion')} className="text-gray-300 hover:text-cyan-400 transition">Computación Física</button>
              <button onClick={() => scrollToSection('programacion')} className="text-gray-300 hover:text-cyan-400 transition">Programación</button>
              <button onClick={() => scrollToSection('proyectos')} className="text-gray-300 hover:text-cyan-400 transition">Proyectos</button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-cyan-400 transition">Contacto</button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition">Inicio</button>
              <button onClick={() => scrollToSection('robotica')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition">Robótica</button>
              <button onClick={() => scrollToSection('computacion')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition">Computación Física</button>
              <button onClick={() => scrollToSection('programacion')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition">Programación</button>
              <button onClick={() => scrollToSection('proyectos')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition">Proyectos</button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition">Contacto</button>
            </div>
          </div>
        )}
      </nav>

      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Construye el Futuro con
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Tecnología</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            La robótica, la computación física y la programación son las herramientas que están transformando nuestro mundo.
            Desde sistemas automatizados hasta dispositivos inteligentes, estas tecnologías impulsan la innovación y crean
            soluciones a los desafíos del presente y futuro.
          </p>
          <button
            onClick={() => scrollToSection('robotica')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/50"
          >
            Explorar más
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section id="robotica" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-10 h-10 text-cyan-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Robótica</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                La robótica es la ciencia que combina ingeniería mecánica, electrónica y programación para crear
                máquinas inteligentes capaces de realizar tareas de manera autónoma o semiautónoma.
              </p>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Aplicaciones en la vida real:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span><strong>Industria:</strong> Robots de manufactura y ensamblaje automatizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span><strong>Medicina:</strong> Cirugías de precisión y rehabilitación asistida</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span><strong>Exploración:</strong> Drones y rovers para misiones espaciales</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span><strong>Hogar:</strong> Asistentes domésticos y sistemas de limpieza</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
              <img
                src={imagen2}
                alt="Estudiantes trabajando en proyectos de robótica educativa"
                className="w-full h-80 object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section id="computacion" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/20 order-2 md:order-1">
              <img
                src={imagen3}
                alt="Computación física con sensores, circuitos y microcontroladores"
                className="w-full h-80 object-cover"/>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-10 h-10 text-blue-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Computación Física</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                La computación física es el arte de crear sistemas interactivos que conectan el mundo digital con
                el físico mediante sensores, actuadores y microcontroladores como Arduino.
              </p>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Componentes clave:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Arduino:</strong> Plataforma de prototipado electrónico de código abierto</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Sensores:</strong> Detectan temperatura, luz, movimiento, distancia y más</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Actuadores:</strong> Motores, LEDs, pantallas y dispositivos de salida</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Proyectos:</strong> Estaciones meteorológicas, domótica, wearables</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="programacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-10 h-10 text-green-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Programación</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Programar es el proceso de crear instrucciones que las computadoras pueden ejecutar. Es desarrollar
                la lógica y el pensamiento crítico para resolver problemas de manera estructurada y eficiente.
              </p>
              <h3 className="text-xl font-semibold text-green-400 mb-3">¿Por qué aprender a programar?</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Desarrolla habilidades de resolución de problemas</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Mejora el pensamiento lógico y analítico</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Abre puertas a múltiples oportunidades profesionales</span>
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-green-400 mb-3">Lenguajes recomendados:</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg text-green-300">Python</span>
                <span className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg text-green-300">Java</span>
                <span className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg text-green-300">C++ (Arduino)</span>
                <span className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg text-green-300">JavaScript</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-green-500/30 shadow-lg shadow-green-500/20">
              <img
                src={imagen4}
                alt="Estudiantes aprendiendo programación y desarrollo de software"
                className="w-full h-80 object-cover"/>
              </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Descubre algunos proyectos prácticos que combinan robótica, programación y electrónica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 hover:transform hover:scale-105 transition duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <project.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-2 transition">
                  Ver más
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="guias" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Guías de Trabajo
      </h2>
      <p className="text-gray-300 text-lg">
        Material de apoyo para las prácticas de tecnología, robótica y programación.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <a
        href="/guias/Guia_uso_esp32.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900/70 border border-cyan-500/30 rounded-xl p-6 hover:scale-105 transition block hover:shadow-xl hover:shadow-cyan-500/20"
      >
        <h3 className="text-xl font-bold text-white mb-3">Guía de uso ESP32</h3>
        <p className="text-gray-300 mb-4">
          Guía práctica para trabajar con ESP32 en clase.
        </p>
        <span className="text-cyan-400 font-semibold">Abrir guía</span>
      </a>
    </div>
  </div>
</section>
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contáctanos</h2>
            <p className="text-gray-300 text-lg">
              ¿Tienes preguntas o quieres comenzar tu viaje en tecnología? Escríbenos
            </p>
          </div>

          <form name="contacto" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="hidden" 
              name="form-name" 
              value="contacto" />
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Mensaje</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition resize-none"
                placeholder="Cuéntanos sobre tu interés en tecnología..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50"
            >
              Enviar Mensaje
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold text-white">TechLearn</span>
              </div>
              <p className="text-gray-400">
                Empoderando mentes para construir el futuro con tecnología
              </p>
            </div>

            <div className="flex justify-start md:justify-end items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 TechLearn. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
