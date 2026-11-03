export interface Project {
  id: number;
  name: string;
  imagePath?: string;
  videoPath?: string;
  description: string;
  display?: boolean;
  programmingLanguages: string[];
  tools: string[];
  skills: string[];
  status: "in-progress" | "completed";
}
