
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
  