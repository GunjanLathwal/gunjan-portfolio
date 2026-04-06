import { Code, BarChart3, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Building robust, scalable applications using modern frameworks and best practices. From concept to deployment, I create solutions that solve real-world problems.',
      features: [
        'Full-stack web applications',
        'API development & integration',
        'Clean, maintainable code',
        'Performance optimization',
      ],
    },
    {
      icon: BarChart3,
      title: 'Data Science Solutions',
      description: 'Transforming raw data into actionable insights through advanced analytics, machine learning models, and intelligent automation systems.',
      features: [
        'Data analysis & visualization',
        'Machine learning models',
        'LLM & RAG applications',
        'Data pipeline development',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="bg-orb bg-orb-primary w-96 h-96 top-1/2 left-0 -translate-y-1/2 opacity-10" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Specialized services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <ArrowRight size={14} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
