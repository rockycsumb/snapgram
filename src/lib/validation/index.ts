import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2,{message: "Name too short"}), 
    username: z.string().min(2,{message:"Username too short"}),
    email: z.string().email(),
    password: z.string().min(8,{message:"password must be more than 8 characters"})
  })