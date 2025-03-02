export interface User {
  id: string;
  name: string;
  username: string;
  profileImageUrl: string;
  bio?: string;
  following: number;
  followers: number;
  joinedDate: string;
  isModerator?: boolean;
}

export interface Category {
  id: string;
  name: string;
  displayName: string;
  icon: string;
}

export interface HelpType {
  id: string;
  name: string;
  displayName: string;
}

export interface UrgencyLevel {
  id: string;
  name: string;
  displayName: string;
}

export interface Cry {
  id: string;
  content: string;
  user: User;
  createdAt: string;
  likes: number;
  shares: number;
  replies: number;
  views: number;
  images?: string[];
  category: string;
  helpType: string;
  status: 'pending' | 'approved' | 'rejected';
  urgency: string;
  location: string;
  amountNeeded: number;
  amountRaised: number;
  validatedBy: string | null;
  validatedAt: string | null;
  documents?: string[];
  rejectionReason?: string;
}

export interface Donation {
  id: string;
  cryId: string;
  userId: string;
  amount: number;
  createdAt: string;
  message: string;
}

export interface Response {
  id: string;
  cryId: string;
  userId: string;
  type: 'volunteer' | 'emotional';
  message: string;
  createdAt: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Stats {
  totalCries: number;
  totalApproved: number;
  totalPending: number;
  totalRejected: number;
  totalDonations: number;
  totalAmountRaised: number;
  totalResponses: number;
  topCategories: Array<{name: string; count: number}>;
  topHelpTypes: Array<{name: string; count: number}>;
}

// Legacy type for backward compatibility
export interface Tweet extends Cry {}