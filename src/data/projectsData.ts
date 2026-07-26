export const projectsData = [
  {
    id: "komodoro",
    title: "komodoro",
    type: "Mobile App",
    description: "Komodoro is a productivity-focused mobile application that helps users manage their time effectively using the proven Pomodoro technique. It allows users to organize tasks, maintain deep focus during work sessions, and visualize their productivity progress with intuitive charts and statistics.",
    techStack: ["Kotlin", "Jetpack Compose", "Material Design"],
    tools: ["Room Database SQLite", "Android Studio"],
    githubUrl: "https://github.com/ryantsany/podomoro-timer",
    liveUrl: "#",
    coverImage: "https://www.image2url.com/r2/default/images/1784789471899-5d3f5b59-5c7b-4074-9037-f9d164767c72.jpeg",
    whatIDid: "Developed collaboratively in a 4-person team, I focused primarily on front-end engineering, state management, and overall UI/UX enhancements for the application. My key contributions involved implementing the app's visual identity, including custom logos and a comprehensive Dark Mode theme. I also engineered intricate state management logic for the user interface, such as dynamically disabling the bottom navigation bar during an active Pomodoro session to prevent accidental interruptions, as well as developing the core mechanics for break sessions. Furthermore, I was responsible for critical debugging, notably resolving a significant time-calculation bug during the app's initial launch to ensure precise timer accuracy. By utilizing Kotlin and Jetpack Compose, I helped deliver a refined, bug-free, and intuitive user experience.",
    documentation: [
      {
        title: "Customizable Focus Timer",
        description: "The core of the app features a clean, distraction-free timer for your Pomodoro sessions. Easily switch between focus time, short breaks, and long breaks using the intuitive bottom tabs. Visual cues, like distinct color changes (orange for focus, green for breaks), keep you aware of your current session state at a glance.",
        image: "https://www.image2url.com/r2/default/images/1784884567954-ac46fd6b-9fa5-4c44-84f8-77f8ea5e67db.jpeg"
      },
      {
        title: "Seamless Session Transitions",
        description: "Stay on track with clear, fullscreen alerts when a session ends. Whether you've completed a focus sprint or finished a restorative break, the app provides distinct visual notifications and easy-to-tap actions to seamlessly transition into your next productivity phase, or extend your break if needed.",
        image: "https://www.image2url.com/r2/default/images/1784885432147-ad1d24c7-b1c2-46da-9ed5-be36406fadd3.png"
      },
      {
        title: "Statistics & Flexible Settings",
        description: "Monitor your productivity habits with the comprehensive Activity dashboard and tailor the Pomodoro technique to fit your personal workflow. View your total focus time, track completed sessions, and customize the duration of your focus sessions and breaks. Additionally, the app features a seamless Dark Mode toggle to reduce eye strain.",
        image: "https://www.image2url.com/r2/default/images/1784886402341-3398c444-19ac-48b8-8002-04a30ec0fa6c.jpeg"
      }
    ]
  },
  {
    id: "mindcare",
    title: "mindcare",
    type: "Web App",
    description: "Mindcare is a supportive web application focused on mental health that guides users on their journey toward emotional balance. It empowers individuals to gain valuable insights through daily mood tracking, access wellness resources, and find professional help within a secure digital space.",
    techStack: ["React", "Vite", "Supabase (PostgreSQL)", "Tailwind CSS"], 
    githubUrl: "https://github.com/HQi0/Mindcare",
    liveUrl: "#",
    coverImage: "https://www.image2url.com/r2/default/images/1785037313392-88e27664-2e96-4651-9a66-9eeb56c25a92.png",
    whatIDid: "Developed collaboratively in a 3-person team, I focused on crafting a responsive UI using React, Tailwind CSS, and Supabase. Key features I implemented include an Anonymous Community, a Session Booking system, interactive mood-tracking graphs, and downloadable assessments, while ensuring seamless mobile responsiveness across all devices.",
    documentation: [
      {
        title: "User Dashboard",
        description: "A centralized, personalized hub where users can seamlessly monitor their daily progress. It provides quick access to recent mood entries, upcoming booked sessions, and curated wellness resources, ensuring all essential tools are just a glance away.",
        image: "https://www.image2url.com/r2/default/images/1784906900854-6b33aca4-0a23-4556-8a88-71f758878ca0.png"
      },
      {
        title: "Professional Booking ",
        description: "An intuitive scheduling system designed to bridge the gap between users and mental health professionals. Users can easily browse through verified profiles, check real-time availability, and securely book consultation sessions with just a few clicks.",
        image: "https://www.image2url.com/r2/default/images/1784907081656-58f07a61-8873-4e97-bb87-e23bf2b6363e.png"
      },
      {
        title: "annonymus Community",
        description: "A safe, secure, and judgment-free digital space built for peer-to-peer support. It empowers individuals to share their personal thoughts and struggles anonymously, fostering a highly supportive environment for mental well-being.",
        image: "https://www.image2url.com/r2/default/images/1784908248048-e9d2610e-54e5-46f6-a561-bd7c97f08ec9.png"
      },
      {
        title: "Interactive Mood and analytics",
        description: "A comprehensive tracking module that allows users to easily log their daily emotional states. It transforms these check-ins into actionable visual data through interactive graphs, enabling users to deeply analyze mood fluctuations and gain valuable insights.",
        image: "https://www.image2url.com/r2/default/images/1784912239528-1e0174a0-7fff-4e14-a0fe-6b72a2fe385d.jpg"
      },
      {
        title: "Self Assesment",
        description: "Provides users with intuitive psychological self-assessment quizzes to evaluate their current mental well-being. Upon completion, the system automatically generates detailed, downloadable assessment reports to help users track their psychological progress.",
        image: "https://www.image2url.com/r2/default/images/1784908452527-70737974-bab0-41d6-82f0-5057b83f00e9.png"
      }
    ]
  },
  {
    id: "sim-sekolah",
    title: "SIM-Sekolah",
    type: "Web Development",
    description: "SIM-Sekolah is a comprehensive educational management platform designed to digitize and automate core academic workflows, streamlining school administration from student records to complex grading systems.",
    techStack: ["React", "TypeScript", "Express.js", "MySQL"],
    githubUrl: "https://github.com/ricoo-io/SIM_Sekolah",
    liveUrl: "#",
    coverImage: "https://www.image2url.com/r2/default/images/1785040034827-135da1ae-7330-43b7-98d5-6887c3219e6e.png",
    whatIDid: "Developed collaboratively in a 2-person team,I built the core features that users interact with the most. I developed the main Admin and Teacher Dashboards, Student Management, and the school's Grading System (including Homeroom features). I was also responsible for creating the backend APIs for classes and grades, ensuring all the data connects smoothly and securely to the frontend.",
    documentation: [
      {
        title: "Secure Authentication",
        description: "A robust and secure login system utilizing JWT and bcrypt password encryption. It features a strict Role-Based Access Control (RBAC) mechanism that intelligently authenticates users and seamlessly routes them to their respective dashboards based on their specific roles as either a Teacher or an Administrator.",
        image: "https://www.image2url.com/r2/default/images/1785045745496-e9ab3fe1-2a7b-4850-891a-b42a70fa0a79.png"
      },
      {
        title: "Administrator Dashboard",
        description: "A centralized command center designed exclusively for school administrators. It provides a comprehensive, at-a-glance overview of school operations, allowing administrators to easily manage user roles, oversee teacher-to-class assignments, and monitor overall system activities in real-time.",
        image: "https://www.image2url.com/r2/default/images/1785045705014-1969555d-fee9-4115-b22b-a63e96a8f5a9.png"
      },
      {
        title: "Teacher Dashboard",
        description: "A specialized, clutter-free interface tailored specifically for educators. It empowers teachers to quickly access their assigned classes, view specific subjects they teach, and navigate through their daily academic responsibilities without unnecessary distractions.",
        image: "https://www.image2url.com/r2/default/images/1785045840458-df6b4e86-d815-48d2-9348-96461547fdd6.png"
      },
      {
        title: "Student Management",
        description: "A dedicated administrative module for handling comprehensive student data. This feature allows administrators to easily register new students, update profiles, assign students to specific classrooms, and maintain a highly organized, digitized database of the entire student body.",
        image: "https://www.image2url.com/r2/default/images/1785045807563-f0ce4177-66a0-4e97-8250-407ad97d79a0.png"
      },
      {
        title: "Grading System",
        description: "An intuitive and automated grading interface for teachers. Educators can easily input various assessment components such as daily quizzes, midterms (UTS), and final exams (UAS). The system then automatically calculates the final grades based on predefined academic formulas, eliminating manual calculation errors.",
        image: "https://www.image2url.com/r2/default/images/1785045882877-d1704bee-ad60-43d2-8aef-20930645020e.png"
      },
      {
        title: "Homeroom Features",
        description: "An exclusive module for teachers designated as homeroom advisors. It grants them elevated privileges to monitor the overall academic progress of every student in their specific class. Homeroom teachers can track performance across all subjects, enabling better student supervision and holistic evaluations.",
        image: "https://www.image2url.com/r2/default/images/1785045934669-ec4690e7-c4d4-46d3-9a59-d8884e23495e.png"
      }
    ]
  }
];
