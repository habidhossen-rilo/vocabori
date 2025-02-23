export type IUserInput = {
  name: string;
  email: string;
  photo: string;
  password: string;
};

export type CreatedUser = {
  name: string;
  email: string;
  photo: string;
  role: string;
  password: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  password: string;
  __v: number;
};

export type CreateUserResponse = {
  message: string;
  user: CreatedUser;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type Status = "pending" | "error" | "success";

export type FormResponseProps = {
  formResponse: {
    success: boolean;
    message: string;
  };
};
