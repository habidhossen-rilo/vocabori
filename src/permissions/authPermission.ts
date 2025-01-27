type Lesson = {
  _id: string;
  lesson_name: string;
  lesson_number: number;
  admin_id: string;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
};

type Vocabulary = {
  _id: string;
  word: string;
  english_word: string;
  pronunciation: string;
  use: string;
  lesson_id: string;
  admin_id: string;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
};

type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  password: string;
  _v: number;
};

type Contact = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
};

type Tutorial = {
  _id: string;
  title: string;
  url: string;
  _v: number;
};

type Role = "admin" | "user";

type PermissionCheck<Key extends keyof Permissions> =
  | boolean
  | ((user: User, data: Permissions[Key]["dataType"]) => boolean);

type RolesWithPermissions = {
  [R in Role]: Partial<{
    [Key in keyof Permissions]: Partial<{
      [Action in Permissions[Key]["action"]]: PermissionCheck<Key>;
    }>;
  }>;
};

type Permissions = {
  lesson: {
    dataType: Lesson;
    action: "view" | "create" | "update" | "delete";
  };
  vocabulary: {
    // Can do something like Pick<Todo, "userId"> to get just the rows you use
    dataType: Vocabulary;
    action: "view" | "create" | "update" | "delete";
  };
  user: {
    dataType: User;
    action: "view" | "create" | "update" | "delete";
  };
  contact: {
    dataType: Contact;
    action: "view" | "create" | "update" | "delete";
  };
  tutorial: {
    dataType: Tutorial;
    action: "view" | "create" | "update" | "delete";
  };
};

const ROLES = {
  admin: {
    lesson: {
      view: true,
      create: true,
      update: true,
      delete: true,
    },
    vocabulary: {
      view: true,
      create: true,
      update: true,
      delete: true,
    },
    user: {
      view: true,
      update: true,
      delete: true,
    },
    contact: {
      view: true,
      update: true,
      delete: true,
    },
    tutorial: {
      view: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  user: {
    lesson: {
      view: true,
    },
    vocabulary: {
      view: true,
    },
    contact: {
      create: true,
    },
    tutorial: {
      view: true,
    },
  },
} as const satisfies RolesWithPermissions;

export function hasPermission<Resource extends keyof Permissions>(
  user: User,
  resource: Resource,
  action: Permissions[Resource]["action"],
  data?: Permissions[Resource]["dataType"],
) {
  console.log(user, resource, action, data, ROLES);
  // return user.roles.some((role) => {
  //   const permission = (ROLES as RolesWithPermissions)[role][resource]?.[
  //     action
  //   ];
  //   if (permission == null) return false;
  //   if (typeof permission === "boolean") return permission;
  //   return data != null && permission(user, data);
  // });
}

// USAGE:
// const user: User = { blockedBy: ["2"], id: "1", roles: ["user"] };
// const todo: Todo = {
//   completed: false,
//   id: "3",
//   invitedUsers: [],
//   title: "Test Todo",
//   userId: "1",
// };

// // Can create a comment
// hasPermission(user, "comments", "create");

// // Can view the `todo` Todo
// hasPermission(user, "todos", "view", todo);

// // Can view all todos
// hasPermission(user, "todos", "view");
