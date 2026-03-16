"use client";

import { useState } from "react";
import { Check, Copy, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : siteConfig.url;
  const url = `${siteUrl}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 mt-8 pt-6 border-t border-border">
      <span className="text-sm text-muted-foreground mr-2">Share:</span>
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        aria-label={copied ? "Link copied" : "Copy link"}
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
