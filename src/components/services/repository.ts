import baseAPI from "./config/index";

interface IResponseRepository {
  name: string;
  description: string;
  html_url: string;
}

export function listRepository(): Promise<IResponseRepository>{
  return baseAPI.get("users/EmersonSEP/repos")
};