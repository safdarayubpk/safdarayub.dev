import { BlogCardSkeleton } from "@/components/blog/blog-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <Skeleton className="h-4 w-32 mb-4" />
        <Skeleton className="h-10 w-48 mb-3" />
        <Skeleton className="h-6 w-96 mb-12" />

        {/* Tag filter skeleton */}
        <div className="flex gap-2 mb-8">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>

        {/* Blog cards */}
        <div className="space-y-6">
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
      </div>
    </main>
  );
}
