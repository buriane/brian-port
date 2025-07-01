import bootstrap from "../assets/bootstrap.webp";
import figma from "../assets/figma.webp";
import firebase from "../assets/firebase.webp";
import flutter from "../assets/flutter.webp";
import git from "../assets/git.webp";
import github from "../assets/github.webp";
import js from "../assets/js.webp";
import laravel from "../assets/laravel.webp";
import livewire from "../assets/livewire.webp";
import php from "../assets/php.webp";
import postman from "../assets/postman.webp";
import react from "../assets/react.webp";
import streamlit from "../assets/streamlit.webp";
import tailwind from "../assets/tailwind.webp";
import vscode from "../assets/vscode.webp";
import wordpress from "../assets/wordpress.webp";
import indonesia from "../assets/indonesia.webp";
import unsoed from "../assets/unsoed.webp";

import elisabeth from "../assets/elisabeth.webp";
import lab from "../assets/lab.webp";
import hmif from "../assets/hmif.webp";

import temulik from "../assets/temulik.webp";
import soeara from "../assets/soeara.webp";
import jjk from "../assets/jjk.webp";
import connected from "../assets/connected.webp";
import sentweet from "../assets/sentweet.webp";
import pedulihati from "../assets/pedulihati.webp";
import chrometry from "../assets/chrometry.webp";
import spotifyCluster from "../assets/spotifycluster.webp";

import sertif1 from "../assets/sertif1.webp";
import sertif2 from "../assets/sertif2.webp";
import sertif3 from "../assets/sertif3.webp";
import sertif4 from "../assets/sertif4.webp";
import sertif5 from "../assets/sertif5.webp";
import sertif6 from "../assets/sertif6.webp";
import sertif7 from "../assets/sertif7.webp";

export const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey! It's me",
  name: "Brian Cahya,",
  description:
    "Creative Web Developer and UI/UX Designer, transforming ideas into seamless and intuitive digital experiences.",
  resumeLinkText: "Access My Resume",
  resumeLink: "/resume.pdf",
};

export const ABOUT_CONTENT = {
  texts: [
    "I live in: ",
    "I'm student at: ",
  ],
  from: [
    "Indonesia, Central Java",
    "Purwokerto"
  ],
  imageindonesia: indonesia,
  college: [
    "Jenderal Soedirman University",
    "Informatics 2022",
  ],
  imageunsoed: unsoed,
  paragraphs: [
    "I am deeply enthusiastic about UI/UX design, driven by a passion for creating user-friendly and visually engaging digital experiences. Committed to continuous learning and growth in the IT field, I am always open to collaboration and new challenges, seeking opportunities to develop innovative solutions with real impact.",
    "I specialize in building efficient, interactive, and responsive applications with smooth animations and seamless user interactions. Using technologies like React, Next.js, Laravel, Tailwind CSS, LiveWire, and Filament, I develop scalable and high-performance solutions that blend aesthetics with functionality.",
    "I have experience learning with a variety of tools and technologies, including: ",
  ],
  skills: [
    { name: "React", image: react, label: "Frontend Framework" },
    { name: "JavaScript", image: js, label: "Programming Language" },
    { name: "Tailwind CSS", image: tailwind, label: "CSS Framework" },
    { name: "Laravel", image: laravel, label: "Web Framework" },
    { name: "Figma", image: figma, label: "Design Tool" },
    { name: "Bootstrap", image: bootstrap, label: "CSS Framework" },
    { name: "Firebase", image: firebase, label: "Backend-as-a-Service" },
    { name: "Flutter", image: flutter, label: "Mobile Framework" },
    { name: "Git", image: git, label: "Version Control System" },
    { name: "GitHub", image: github, label: "Code Hosting Platform" },
    { name: "Postman", image: postman, label: "API Testing Tool" },
    { name: "Streamlit", image: streamlit, label: "Web App Framework" },
    { name: "Visual Studio Code", image: vscode, label: "Code Editor" },
    { name: "WordPress", image: wordpress, label: "Content Management System (CMS)" },
    { name: "PHP", image: php, label: "Programming Language" },
    { name: "LiveWire", image: livewire, label: "Full-stack Framework" },
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "Aug — Dec 2024",
    image: lab,
    title: "Object-Oriented Programming Lab Assistant",
    location: "Laboratorium Informatika UNSOED",
    description: [
      "Taught and mentored students on the basic concepts of Object Oriented Programming (OOP) through interactive methods, including integrating educational games to practice and reinforce concept understanding.",
      "Held 2 practicum shift schedules per week (20 students per shift), guiding students through practical exercises and assignments to enhance their programming skills and understanding of OOP principles.",
      "Worked closely with other OOP lab assistants to ensure consistent content delivery and assessment.",
      "Prepared pre-test, post-test, and practicum exam/response questions.",
    ],
  },
  {
    yearRange: "Jul — Aug 2024",
    image: elisabeth,
    title: "Healthcare Online Registration System Software Engineer",
    location: "RSU St. Elisabeth Purwokerto",
    description: [
      "Undertook a month-long internship, collaborating closely with the IT department head to create a comprehensive online registration system for both general and insurance patients.",
      "Led the project's development cycle, which encompassed creating detailed flowcharts, performing thorough system analysis, designing intuitive mockups, and implementing key web components including user interface, database integration, and extensive documentation.",
      "Fostered strong professional relationships with various hospital personnel, including administrative staff, nursing team, and medical practitioners throughout the internship period.",
      "Concluded the internship by delivering a comprehensive presentation of the project outcomes to both staff members and the director, showcasing the system's functionality and potential impact.",
    ],
  },
  {
    yearRange: "Feb — Dec 2024",
    image: hmif,
    title: "Science and Technology Division Staff",
    location: "HMIF UNSOED (Himpunan Mahasiswa Informatika UNSOED)",
    description: [
      "Responsible for Web Management of the association's Scientific and Technology division, managing and developing the Unsoed Informatics Student Association website using WordPress.",
      "Optimizing the appearance and content of the website to match the theme as well as creating and managing online registration forms for various purposes (member data collection, event registration, and committee).",
      "Actively attended meetings to discuss the progress and activities of the organization, and participated in various committees as both a member and division coordinator.",
      "Through involvement in social activities and committees, successfully built good relationships with colleagues, supporting the creation of a collaborative organizational environment.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "PeduliHati",
    description: "PeduliHati is a web-based expert system platform that provides preliminary analysis of liver disease based on symptoms entered by users, relying on machine learning algorithms for classification.",
    image: pedulihati,
    tech: ["Django", "MySQL", "Tailwind CSS", "Python", "HTML/CSS", "JavaScript", "Figma"],
    link: "https://github.com/buriane/naive-bayes",
  },
  {
    name: "Chrometry",
    description: "Chrometry is a web-based application for visual analysis of product photos, capable of detecting geometric shapes and performing dominant color segmentation using digital image processing techniques.",
    image: chrometry,
    tech: ["Streamlit", "Python", "OpenCV", "NumPy", "Matplotlib"],
    link: "https://github.com/buriane/chrometry",
  },
  {
    name: "SpotifyCluster",
    description: "SpotifyCluster is a web-based Spotify user behavior analysis application that uses PCA and K-Means for clustering and Apriori to find association patterns.",
    image: spotifyCluster,
    tech: ["Streamlit", "Python", "Scikit-learn", "MLxtend", "Pandas", "Matplotlib"],
    link: "https://github.com/buriane/spotify-clustering",
  },
  {
    name: "Temulik",
    description: "Temulik is an innovative application based on geolocation and gamification to optimize the search for lost items in the campus environment.",
    image: temulik,
    tech: ["Firebase", "Flutter", "Figma"],
    link: "https://github.com/buriane/temulik",
  },
  {
    name: "Soeara",
    description: "Soeara (Soedirman Berbicara) is a petition platform that aims to give voice to the Unsoed community and promote positive change within the campus environment.",
    tech: ["MySQL", "VPS", "Laravel 11", "Tailwind CSS", "Alpine JS", "Livewire", "Filament", "Figma"],
    image: soeara,
    link: "https://github.com/mabesinfor/soeara",
  },
  {
    name: "Jujutsu Kaisen Hub",
    description: "Jujutsu Kaisen Hub is the main information website about the anime “Jujutsu Kaisen”, including the latest articles, episodes, and seasons.",
    tech: ["MySQL", "PHP", "JavaScript", "HTML/CSS", "Figma"],
    image: jjk,
    link: "https://github.com/buriane/jjk",
  },
  {
    name: "Connected",
    description: "Connected is a simple project management website for fictitious companies.",
    tech: ["MySQL", "Laravel 10", "Bootstrap", "JavaScript", "HTML/CSS"],
    image: connected,
    link: "https://github.com/buriane/connected",
  },
  {
    name: "Sentweet",
    description: "Sentweet (Short for Sentiment Tweet) is a Streamlit app for analyzing sentiment in Indonesian tweets using BERT, with keyword-based crawling and interactive visualization.",
    tech: ["Streamlit", "Python", "BERT", "PyTorch", "Nlpaug", "Scikit-learn"],
    image: sentweet,
    link: "https://github.com/mabesinfor/sentweet",
  },
];

export const CERTIFICATES = [
  {
    name: "Finalis PKM-KC - Rector Cup IV",
    issuer: "Jenderal Soedirman University",
    year: "2024",
    image: sertif1,
  },
  {
    name: "Object Oriented Programming Lab Assistant",
    issuer: "Informatics Laboratory Assistant",
    year: "2024",
    image: sertif2,
  },
  {
    name: "Internship Website Developer",
    issuer: "RSU St. Elisabeth Purwokerto",
    year: "2024",
    image: sertif3,
  },
  {
    name: "Best Web Programming Project",
    issuer: "Informatics Laboratory Assistant",
    year: "2023",
    image: sertif4,
  },
  {
    name: "Community Service Volunteer",
    issuer: "Himpunan Mahasiswa Informatika Universitas Jenderal Soedirman",
    year: "2023",
    image: sertif5,
  },
  {
    name: "Public Relations Coordinator",
    issuer: "Himpunan Mahasiswa Informatika Universitas Jenderal Soedirman",
    year: "2023",
    image: sertif6,
  },
  {
    name: "Public Relations Committee",
    issuer: "Himpunan Mahasiswa Informatika Universitas Jenderal Soedirman",
    year: "2022",
    image: sertif7,
  },
];

export const CONTACT_CONTENT = {
  headline: "Connect with Me",
  description: "I'm always available to connect. Whether you have a project in mind or simply want to say hello, feel free to reach out — I'll be sure to respond.",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/briancahya/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill", 
    },
    {
      platform: "Email",
      url: "mailto:briancp14@gmail.com",
      ariaLabel: "Send me an email",
      icon: "RiMailFill", 
    },
    {
      platform: "GitHub",
      url: "https://github.com/buriane",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/briancahyaa",
      ariaLabel: "Follow me on Instagram",
      icon: "RiInstagramFill",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/6282268038586",
      ariaLabel: "Send me a message on WhatsApp",
      icon: "RiWhatsappFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Brian Cahya. All rights reserved.`,
};