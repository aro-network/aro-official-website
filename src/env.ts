export type TypeENV = "prod" | "beta";
export const ENV: TypeENV = (process.env.NEXT_PUBLIC_ENV as any) || "prod";

export const isProd = ENV === "prod";
export const isBeta = ENV === "beta";
