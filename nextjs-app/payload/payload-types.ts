/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    recipes: Recipe;
    "payload-preferences": PayloadPreference;
    "payload-migrations": PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
  roles: ("admin" | "user")[];
}
export interface Recipe {
  id: number;
  title: string;
  subtitle: string;
  link?: string | null;
  linktitle?: string | null;
  publishedAt?: string | null;
  relatedRecipes?: (number | Recipe)[] | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: "users";
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}

declare module "payload" {
  export interface GeneratedTypes extends Config {}
}
