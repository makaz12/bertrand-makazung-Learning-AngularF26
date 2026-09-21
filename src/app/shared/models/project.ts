export interface Project {
  id: number;
  imagePath: string;
  videoPAth?: string;
  description: string;
  display: boolean;
  programmingLanguages: String[];
  skills: String[];
  status: "in-progress" | "completed";
}
