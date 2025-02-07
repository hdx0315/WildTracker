// app/firebase/types.ts
export interface Incident {
    id?: string;
    reporterId: string;
    incidentType: 'sighting' | 'attack' | 'conflict';
    description: string;
    location: {
      latitude: number;
      longitude: number;
      geohash?: string;
    };
    mediaUrls?: string[];
    status: 'pending' | 'verified' | 'rejected';
    riskLevel?: 'low' | 'medium' | 'high';
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface User {
    uid: string;
    email: string;
    fullName: string;
    phoneNumber?: string;
    role: 'villager' | 'researcher' | 'conservationist' | 'admin';
    status: 'pending' | 'active' | 'suspended';
    location?: {
      latitude: number;
      longitude: number;
    };
  }
  
  export interface Resource {
    id?: string;
    title: string;
    contentType: 'article' | 'video' | 'infographic';
    content: string;
    authorId: string;
    status: 'draft' | 'published' | 'archived';
    createdAt: Date;
    updatedAt: Date;
  }