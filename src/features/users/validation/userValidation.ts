export function validateUserInput(user: {
  name: string;
  email: string;
  photo: string;
  password: string;
}) {
  const errors: string[] = [];

  if (!user.name || user.name.length < 3) {
    errors.push("Name must be at least 3 characters long");
  }

  if (
    !user.email ||
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email)
  ) {
    errors.push("Invalid email address");
  }

  if (!user.photo || !user.photo.startsWith("http")) {
    errors.push("Photo must be a valid URL");
  }

  if (!user.password || user.password.length < 6) {
    errors.push("Password must be at least 6 characters long");
  }

  return errors;
}
