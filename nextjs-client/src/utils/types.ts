import { StaticImageData } from "next/image";
import z from "zod";
type Role = "USER" | "ADMIN" | "RESTAURANT";

export type User = {
  id: string;
  name: string;
  address: string;

  role: Role;
  avatarUrl: StaticImageData;
};
export const LeftOverItemZod = z.object({
  id: z.optional(z.string()),
  name: z.string(),
  description: z.string(),
  restaurantId: z.string(),
  quantity: z.number(),
  imageUrl: z.string().min(1),
});
export type LeftOverItem = z.infer<typeof LeftOverItemZod>;

export type Restaurant = {
  id: string;
  name: string;
  address: string;
  role: Role;
  avatarUrl: StaticImageData;
};
