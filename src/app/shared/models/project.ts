export interface Project {
  id: string;
  private: boolean;
  html_url: string;
  name: string;
  imagePath?: string;
  videoPath?: string;
  description: string;
  languages: string[];
  tools: string[];
  skills: string[];
  status: "in-progress" | "completed";
}
