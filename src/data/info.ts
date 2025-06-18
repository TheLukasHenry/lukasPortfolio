export const info = {
  name: 'Lukas Herajt',
  brief_description:
    "I'm an accomplished software engineer and web developer with a robust foundation in computer science.",
  role: 'Software Engineer',
  picture: '/profilePic.png',
  picture_alt: 'Lukas Herajt',
  location: 'Cameron, NC',
  cv: '/LukasHerajtResume.pdf',

  about: {
    description: `I'm an accomplished software engineer and web developer with a robust foundation in computer science and extensive expertise in developing scalable web applications and e-commerce solutions. Skilled in leveraging modern technologies such as Next.js, .NET Core, MS SQL Server, and GraphQL to deliver enhanced user experiences and operational efficiencies. I demonstrate a strong aptitude for AI integration and quality assurance, ensuring applications not only meet but exceed performance expectations.`,
    education: [
      {
        title: 'Associate of Science in Computer Science',
        date: 'Graduated: 2021',
        location: 'Hudson County Community College, Jersey City, NJ',
        gpa: '',
        thesis: '',
      },
    ],
    experience: [
      {
        title: 'Software Engineer',
        date: 'September 2022 - Present',
        location: 'American Board of Anesthesiology',
        description:
          'Lead the development of scalable software solutions using MS SQL, C#, Next.js, and React Native, resulting in a 35% improvement in system performance and a 25% increase in user engagement. Design and implement efficient code architectures that streamline operations and reduce processing times by 30%, significantly enhancing system reliability and performance.',
      },
      {
        title: 'Software Engineer',
        date: 'December 2021 - September 2022',
        location: 'Mid Atlantic Distribution',
        description:
          "Developed a headless e-commerce storefront using GraphQL and REST APIs, contributing to a 28% increase in revenue. Revitalized the front-end of the company's online store, improving usability and SEO, resulting in a 20% uplift in organic search traffic. Crafted reusable components and hooks with TypeScript and React, expanding market presence by 15% through enhanced software modularity and maintainability.",
      },
      {
        title: 'Web Developer',
        date: 'November 2020 - December 2021',
        location: 'Hiretalk',
        description:
          'Engineered client-side functionalities, notably through custom hooks, to optimize application structure, reducing errors by 40% and enhancing code maintainability. Innovated a feature allowing users to save favorite ordered items, boosting customer satisfaction and retention rates by 30%. Collaborated with cross-functional teams to translate requirements into scalable web application features, leading to a 50% improvement in development efficiency and seamless integration.',
      },
    ],

    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'TypeScript',
      'Next.js',
      'GraphQL',
      'C#',
      '.NET Core',
      'MS SQL Server',
      'Python',
    ], // not used yet
  },

  projects: [
    {
      title: 'ClinicQuizzer',
      date: '2024',
      description:
        'User-friendly AI Interface application forked from Open WebUI, supporting Ollama and OpenAI API integration for enhanced medical education and quiz generation.',
      link: 'https://github.com/TheLukasHenry/clinicquizzer',
      tech: ['Python', 'JavaScript', 'Svelte', 'Docker', 'AI/ML'],
      img_alt: 'ClinicQuizzer AI Interface',
      img_path: '/clinicquizzer.png',
    },
    {
      title: 'Quapp Container',
      date: '2024',
      description:
        'A containerized application solution designed for efficient deployment and scalability, demonstrating modern DevOps practices and container orchestration.',
      link: 'https://github.com/TheLukasHenry/Quapp-Container',
      tech: ['Docker', 'Container Orchestration', 'DevOps', 'Deployment'],
      img_alt: 'Quapp Container Application',
      img_path: '/Quapp.png',
    },
    {
      title: 'BakerTest',
      date: '2024',
      description:
        'A comprehensive testing framework and application showcasing automated testing methodologies and quality assurance practices in software development.',
      link: 'https://github.com/TheLukasHenry/bakertest',
      tech: ['Testing Framework', 'Quality Assurance', 'Automation', 'CI/CD'],
      img_alt: 'BakerTest Testing Framework',
      img_path: '/BakerTest.png',
    },
  ],

  contact: {
    email: 'lukasherajt@gmail.com',
    phone: '+1 (201) 640-7892', // Update this with your actual phone number
    linkedin: 'https://www.linkedin.com/in/lukasherajt/',
    github: 'https://www.github.com/TheLukasHenry',
    twitter: 'https://luckyportofolio.net',
  },
}
