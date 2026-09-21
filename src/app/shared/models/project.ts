export interface Project {
  id: number;
  imagePath: string;
  videoPAth?: string;
  description: string;
  display: boolean;
  programmingLanguages: String[];
  tools?: String[];
  skills: String[];
  status: "in-progress" | "completed";
}
