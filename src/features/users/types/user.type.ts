export type FormData = {
  name: string;
  email: string;
  photo: string;
  role: string;
  password: string;
};

export type CreatedUser = {
  name: string;
  email: string;
  photo: string;
  role: string;
  password: string;
};

export type CreateUserResponse = {
  message: string;
  user: CreatedUser;
};
