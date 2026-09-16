"use client";

const STORAGE_KEY = "toan10_casio_bookmarks";

export function getCasioBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleCasioBookmark(tipId: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const list = getCasioBookmarks();
    const index = list.indexOf(tipId);
    let updated: string[];
    if (index >= 0) {
      updated = list.filter((id) => id !== tipId);
    } else {
      updated = [...list, tipId];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}
