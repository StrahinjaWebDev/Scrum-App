export interface User {
  id: string;
  name: string;
  image: string;
  Workspace?: {
    id: string;
    name: string;
  };
}

export interface Board {
  id: ?string;
  workspaceId: string;
  name: string;
  Columns: Column[];
}
