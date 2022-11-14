import { Buffer } from "buffer";

export const getCursorHashFromElementIndex = (page: number) =>
  Buffer.from(`cursor:${page}`).toString("base64");
