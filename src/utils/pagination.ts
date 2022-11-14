import { Buffer } from "buffer";

export const getCursorHashFromElementIndex = (page: number) =>
  Buffer.from(`cursor:${page}`).toString("base64");

export const getElementIndexfromCursorHash = (hash: string) =>
  Buffer.from(hash, "base64").toString("ascii").replace("cursor:", "");
