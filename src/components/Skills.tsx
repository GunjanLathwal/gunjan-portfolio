import { 
  Cloud, 
  Code2, 
  Globe, 
  Database, 
  Brain, 
  Sparkles, 
  Eye, 
  Server, 
  Layers 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Data',
      icon: Cloud,
      skills: ['AWS (S3, EC2, Lambda)', 'Snowflake'],
      color: 'primary',
    },
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C++', 'Java', 'JavaScript', 'Python', 'C#'],
      color: 'secondary',
    },
    {
      title: 'Web & Frameworks',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', '.NET', 'FastAPI'],
      color: 'primary',
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Time Series Analysis'],
      color: 'secondary',
    },
    {
      title: 'GenAI / LLMs',
      icon: Sparkles,
      skills: ['LLMs', 'RAG', 'RAGAS', 'Prompt Engineering'],
      color: 'primary',
    },
    {
      title: 'AI Observability',
      icon: Eye,
      skills: ['Langfuse', 'LangSmith'],
      color: 'secondary',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'SQL', 'Vector Databases'],
      color: 'primary',
    },
    {
      title: 'Core Concepts',
      icon: Layers,
      skills: ['DSA', 'OOP', 'System Integration', 'Data Pipelines'],
      color: 'secondary',
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-muted/20">
      <div className="bg-orb bg-orb-secondary w-72 h-72 -bottom-36 -right-36 opacity-20" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 glow-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${
                category.color === 'primary' 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-secondary/20 text-secondary'
              }`}>
                <category.icon size={24} />
              </div>
              
              <h3 className="font-semibold text-lg mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
