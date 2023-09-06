import  { z } from "zod";

export const addUserValidator = z.object({
  name: z.string().min(1).max(30), 
  email: z.string().min(1).max(30),
  rank: z.string().min(1).max(30),
  station: z.string().min(1).max(30),
  batchId: z.string().min(1).max(30),
  password: z.string().min(5).max(30),
  }).required({message: "Make sure you meet up all post requirements"});

  export const loginUserValidator = z.object({
  // name: z.string().min(1).max(30), 
  // email: z.string().min(1).max(30),
  // rank: z.string().min(1).max(30),
  station: z.string().min(1).max(30),
  batchId: z.string().min(1).max(30),
  // password: z.string().min(5).max(30),
  }).required({message: "Make sure you meet up all post requirements"});


export const updateUser = z.object({
    name: z.string().min(1).max(30).optional(), 
    email: z.string().min(1).max(30).optional(),
    rank: z.string().min(1).max(30).optional(),
    stationId: z.string().min(1).max(30).optional(),
    batchId: z.string().min(1).max(30).optional(),
    password: z.string().min(5).max(30).optional()
}).required({message:"Ensure all updates are up to standard"});

export const validateUpdateUserPost = (data) => {
  return updateUser.safeParse(data);
};


export const deleteUserValidator = z.string({
    role: z.string("Admin"),
});
export const validateDeleteUserPost = (data) => {
  return deleteUserValidator.safeParse(data);
};


export const getUsers = z.string({
  page: z.number().positive().optional(),
  limit: z.number().positive().optional(),
});

export const validateGetUsersQuery = (data) => {
  return getUsers.safeParse(data);
};
