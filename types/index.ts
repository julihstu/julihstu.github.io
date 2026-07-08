// Profile types
export interface Skill {
  name: string;
  level: number;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  email: string;
  location: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  social: {
    github?: string;
    linkedin?: string;
    leetcode?: string;
    upwork?: string;
    portfolio?: string;
    email?: string;
    phone?: string;
  };
  resumeUrl: string;
  skills: Skill[];
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null | { frontend?: string; backend?: string };
  featured: boolean;
}

// Experience types
export interface Experience {
  company: string;
  logo?: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

// Education types
export interface Education {
  degree: string;
  institution: string;
  icon?: string;
  period: string;
  location: string;
  cgpa?: string;
  achievements?: string[];
}

// Certification types
export interface Certification {
  name: string;
  issuer: string;
  icon?: string;
  icons?: string[];
  date: string;
  location?: string;
  highlights?: string[];
  verifyUrl?: string;
}

// Skills category type (for skills page)
export type SkillsCategory = Record<string, string[]>;

// Blog post types
export interface BlogPostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
  slug: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
