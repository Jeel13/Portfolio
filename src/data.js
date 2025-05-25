export const projects = [
  {
    title: 'EaseDeploy',
    desc: 'DevOps-focused CI/CD automation tool that clones code, builds Docker images, and deploys to AWS with live log streaming and instant preview URLs.',
    tech: [
      'Docker',
      'React',
      'AWS',
      'Kafka',
      'Node.js',
      'Clickhouse',
      'PostgreSQL',
      'Socket.io',
    ],
    link: 'https://github.com/Jeel13/EaseDeploy',
    demo: '',
  },
  {
    title: 'Triggr',
    desc: 'Full-stack workflow engine that schedules, retries, and version-controls automations while keeping an audit trail for 50+ concurrent jobs.',
    tech: [
      'Docker',
      'Python',
      'MongoDB',
      'Node.js',
      'React',
      'JWT',
      'bcrypt',
      'Jest',
      'Supertest',
    ],
    link: 'https://github.com/Jeel13',
    demo: '',
  },
  {
    title: 'EdgeVision',
    desc: 'Edge-to-cloud face recognition system using MTCNN on Greengrass devices and FaceNet via Lambda, with real-time results over MQTT and SQS.',
    tech: [
      'AWS IoT Greengrass v2',
      'AWS Lambda',
      'AWS IoT Core (MQTT)',
      'SQS',
      'EC2',
      'Python',
      'PyTorch (MTCNN)',
      'Boto3',
    ],
    link: 'https://github.com/Jeel13',
    demo: '',
  },
  {
    title: 'Rebbit',
    desc: 'Real-time social platform with chat, nested comments, search, and profile management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Socket.io'],
    link: 'https://github.com/Jeel13/Rebbit',
    demo: '',
  },
];

export const education = [
  {
    school: 'Arizona State University',
    degree: 'M.S. Computer Science',
    date: 'Aug 2024 – May 2026',
    details: [
      'GPA: 3.9/4.0',
      'Courses: Cloud Computing, Foundations of Algorithms, Data Visualization, Blockchain Technologies, Applied Cryptography',
    ],
  },
  {
    school: 'Nirma University',
    degree: 'B.Tech. Computer Science and Engineering',
    date: 'Aug 2019 – May 2023',
    details: [
      'CGPA: 7.6/10.0',
      'Courses: Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Big Data Analytics, Machine Learning',
    ],
  },
];

export const extracurriculars = [
  {
    name: 'Complete Node.js Developer',
    detail:
      'Completed a 4-week course covering Node.js, MongoDB, GraphQL and SQL',
    link: 'https://www.udemy.com/certificate/UC-a0b95c67-cbfd-4a7b-923a-b392f9f7113b/',
  },
  {
    name: 'CodeAdda Club @ Nirma University – Core Member',
    detail:
      'Organised monthly workshops on core DSA concepts and mentored junior students in algorithms, system design and internships ',
  },
  {
    name: 'Leetcode',
    detail:
      'Solved 450+ coding problems spanning arrays, graphs, dynamic programming, etc.. Active contributor to contests and discussion boards.',
    link: 'https://leetcode.com/u/Jeel13/',
    linkLabel: 'Visit Profile',
  },
];

export const work = [
  {
    role: 'Education Specialist',
    company: 'Arizona State University',
    location: 'Tempe, AZ',
    date: 'Apr 2025 – Present',
    points: [
      'Taught English for Academic Purposes courses, ensuring consistent instruction for multilingual learners.',
      'Tutored 100+ students in academic writing, speaking, and grammar through one-on-one and group sessions.',
      'Facilitated orientation sessions for international students, introducing academic tools and support systems.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Kabra Logitech',
    location: 'Ahmedabad, India',
    date: 'Jan 2023 – Jun 2024',
    points: [
      'Developed the Routes module using React, Node.js, and Python, integrating real-time validations and covered by 10+ Jest unit tests.',
      'Revamped three key user interfaces, resulting in a 15% increase in UX evaluation scores and improved user task flow.',
      'Implemented OTP-based verification for booking and delivery, enhancing transactional security and reducing failure rates.',
      'Collaborated in a cross-functional team to streamline deployment pipelines and improve feature rollout speed.',
    ],
  },
];
