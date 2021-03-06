export type User = {
  blocked: Boolean | null;
  confirmed: Boolean;
  created_at: string;
  email: string;
  id: number;
  provide: string;
  role: object;
  updated_at?: string;
  username: string;
  profileName: string;
  userInfoText: string;
  userLocation: string;
  userWebsite: string;
  avatar: {
    url: string;
  }
};
