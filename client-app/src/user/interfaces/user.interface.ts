export interface UserRes {
  status: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  profileImageUrl: string;
}
