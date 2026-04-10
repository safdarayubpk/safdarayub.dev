"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon, X, FileText, FolderOpen } from "lucide-react";

interface SearchItem {
  type: "project" | "blog";
  title: string;
  description: string;
  href: string;
  tags?: string[];
}

interface SearchProps {
  items: SearchItem[];
}

export function Search({ items }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = query.length >= 2
    ? items.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.toLowerCase().includes(q))
        );
      })
    : [];

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setQuery("");
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) handleClose();
        else handleOpen();
      }
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  function navigate(href: string) {
    handleClose();
    router.push(href);
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md border border-border bg-background"
        aria-label="Search (Ctrl+K)"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
          onClick={handleClose}
        >
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg mx-4 rounded-lg border bg-background shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b px-4">
              <SearchIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects and blog posts..."
                className="flex-1 py-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={handleClose}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {query.length >= 2 && (
              <div className="max-h-80 overflow-y-auto p-2">
                {results.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                ) : (
                  <ul>
                    {results.map((item) => (
                      <li key={item.href}>
                        <button
                          onClick={() => navigate(item.href)}
                          className="w-full flex items-start gap-3 rounded-md px-3 py-2.5 text-left hover:bg-muted transition-colors"
                        >
                          {item.type === "project" ? (
                            <FolderOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          ) : (
                            <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          )}
                          <div className="min-w-0">
                            <div className="text-sm font-medium truncate">
                              {item.title}
                            </div>
                            <div className="text-xs text-muted-foreground line-clamp-1">
                              {item.description}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {query.length < 2 && (
              <div className="p-6 text-center text-sm text-muted-foreground">
                Type at least 2 characters to search
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
