// ======================
// Core Profile Types
// ======================
export type PortfolioProfile = {
    fullName: string;
    avatarUrl: string;
    headline: string;
    bio: string;
    website?: string;
    contactEmail: string;
    socialProfiles: SocialProfile[];
    technicalSkills: TechnicalSkill[];
    projects: Project[];
    workExperience: WorkExperience[];
    education: Education[];
    certifications: Certification[];
    achievements: Achievement[];
    volunteerWork?: VolunteerExperience[];
  };
  
  // ======================
  // Supporting Types
  // ======================
  export type SocialProfile = {
    platform: string;
    url: string;
    username?: string; // For platforms like Discord/GitHub where URL isn't standard
    icon?: string; // URL to platform icon
  };
  
  export type Technology = {
    name: string;
    iconUrl: string;
    category?: 'language' | 'framework' | 'tool' | 'database';
  };
  
  export type Collaborator = {
    name: string;
    profileUrl: string;
    avatarUrl: string;
    role?: string;
    contribution?: string[];
  };
  
  export type DeploymentPlatform = {
    name: string;
    iconUrl: string;
    url?: string;
    environment?: 'production' | 'staging' | 'development';
  };
  
  export type Project = {
    title: string;
    slug: string; // URL-friendly identifier
    summary: string;
    details: string[];
    repositoryUrl?: string; // Formerly codeUrl
    demoUrl?: string; // Generalize from demoVideoUrl
    caseStudyUrl?: string;
    thumbnailUrl: string;
    technologies: Technology[];
    collaborators: Collaborator[];
    deployments: DeploymentPlatform[];
    status: 'active' | 'archived' | 'wip' | 'experimental';
    timeline: {
      startDate: Date;
      endDate?: Date;
    };
    tags: string[];
    metrics?: {
      users?: number;
      performance?: string;
      uptime?: string;
    };
  };

  export type Company = {
    name: string,
    description: string,
    location: string;
    url: string;
  }
  
  export type WorkExperience = {
    position: string;
    company: string;
    companyUrl?: string;
    location: string;
    employmentType: 'full-time' | 'part-time' | 'contract' | 'freelance';
    timeline: {
      startDate: Date;
      endDate?: Date;
      isCurrent: boolean;
    };
    description: string;
    responsibilities: string[];
    technologiesUsed: Technology[];
    accomplishments: string[];
  };
  
  export type Education = {
    degree: string;
    institution: string;
    institutionUrl?: string;
    location: string;
    timeline: {
      startDate: Date;
      endDate?: Date;
      isCompleted: boolean;
    };
    fieldsOfStudy: string[];
    gpa?: string;
    honors?: string[];
    activities?: string[];
  };
  
  export type Certification = {
    name: string;
    issuingOrganization: string;
    issueDate: Date;
    expirationDate?: Date;
    credentialId?: string;
    credentialUrl?: string;
  };
  
  export type Achievement = {
    title: string;
    date: Date;
    issuer: string;
    description: string;
    associatedWith?: Project | WorkExperience;
  };
  
  export type TechnicalSkill = {
    technology: Technology;
    proficiency: ProficiencyLevel;
    yearsOfExperience: number;
    lastUsed?: Date;
    projectsUsedIn?: Project['slug'][];
  };
  
  
  export type VolunteerExperience = {
    organization: string;
    role: string;
    timeline: {
      startDate: Date;
      endDate?: Date;
    };
    description: string;
    causes: string[];
  };
  
  // ======================
  // Enums
  // ======================
  export enum ProficiencyLevel {
    Novice = 'novice',
    Intermediate = 'intermediate',
    Advanced = 'advanced',
    Expert = 'expert'
  }
  
  export enum ProjectStatus {
    Active = 'active',
    Archived = 'archived',
    WIP = 'wip',
    Experimental = 'experimental'
  }