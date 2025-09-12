// components/Skills.tsx
import Image from 'next/image';

const skills = [
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'C#', icon: '/icons/csharp.png' },
  { name: 'Angular', icon: '/icons/angular.png' },
  { name: 'Spring', icon: '/icons/spring.png' },
  { name: 'PHP', icon: '/icons/php.png' },
  { name: 'MySQL', icon: '/icons/mysql.png' },
  { name: 'Git', icon: '/icons/git.png' },
  { name: 'Docker', icon: '/icons/docker.png' },
  { name: 'JS', icon: '/icons/javascript.png' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
];

export default function Skills() {
  return (
    <section className="p-8 md:p-16 bg-gray-900 text-white">
      <h2 className="text-xl font-semibold mb-6">Minhas Habilidades</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-800 p-2 flex items-center justify-center border-2 border-cyan-400">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}