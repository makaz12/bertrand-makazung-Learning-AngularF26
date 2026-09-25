export interface Project {
  id: number;
  name: string;
  imagePath: string;
  videoPath?: string;
  description: string;
  display?: boolean;
  programmingLanguages: String[];
  tools: String[];
  skills: String[];
  status: "in-progress" | "completed";
}
