import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Ana",
    email: "laura.arezo@gmail.com",
    password: "123456",
    techs: ["Node.js", { title: "Noname", tech: 1 }],
  });

  console.log(user);
  return response.json({ message: "Hello World" });
}
