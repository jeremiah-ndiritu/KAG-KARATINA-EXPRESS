export interface Member {
  id: number;
  name: {
    firstName: string;
    lastName: string;
    nickName: string;
  };
  dob: string;
  phoneNumber: string;
  email: string;
  department: string;
  services: string[];
  roles: string[];
  joinedDate: string;
  status: "active" | "inactive" | "pending"; // Literal types for better safety
  profileImage: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
  notes: string;
  permissions: {
    canPost: boolean;
    canAccessMembersOnly: boolean;
    canManageEvents: boolean;
  };
}
