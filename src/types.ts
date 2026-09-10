export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
  lucideIconName: string;
  description: string;
  level: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  previewClass: string;
  previewGradient: string;
  previewIcon: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface AboutCard {
  title: string;
  icon: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  whatsapp?: string;
  projectType?: string;
  budget?: string;
  message: string;
  subject?: string;
}
