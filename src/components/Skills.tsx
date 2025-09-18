import Image from 'next/image';

const skills = [
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'C#', icon: '/icons/csharp.svg' },
  { name: 'Flutter', icon: '/icons/flutter.svg' },
  { name: 'Delphi', icon: '/icons/delphi.svg' },
  { name: 'PHP', icon: '/icons/php.png' },
  { name: 'JS', icon: '/icons/js.svg' },
  { name: 'Next JS', icon: '/icons/nextjs.svg' },
  { name: 'Angular', icon: '/icons/angular.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Sybase', icon: '/icons/sybase.png' },
  { name: 'MySQL', icon: '/icons/mysql.png' },
  { name: 'SQLServer', icon: '/icons/sqlserver.png' },
  { name: 'Postgres', icon: '/icons/postgres.svg' },
  { name: 'Sqlite', icon: '/icons/sqlite.png' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
];

const skillColors: { [key: string]: string } = {
  'Java': 'bg-red-100',
  'C#': 'bg-indigo-100',
  'Flutter': 'bg-cyan-100',
  'Delphi': 'bg-red-100',
  'PHP': 'bg-purple-100',
  'JS': 'bg-yellow-100',
  'Next JS': 'bg-gray-100',
  'Angular': 'bg-red-100',
  'React': 'bg-cyan-100',
  'Sybase': 'bg-sky-100',
  'MySQL': 'bg-blue-100',
  'SQLServer': 'bg-blue-100',
  'Postgres': 'bg-blue-100',
  'Sqlite': 'bg-blue-100',
  'Git': 'bg-orange-100',
  'Docker': 'bg-cyan-100',
};

export default function Skills() {
  return (
    <section className="p-8 md:p-16 bg-white text-gray-600">
      <h2 className="text-xl font-semibold mb-6">Minhas Habilidades</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className={`w-16 h16 rounded-full ${skillColors[skill.name]} p-2 flex items-center justify-center `}>
              <Image
                src={skill.icon}
                alt={skill.name}
                width={93}
                height={93}
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