import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetailLoading() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <Skeleton className="h-4 w-64 mb-6" />

        {/* Project image */}
        <Skeleton className="aspect-video w-full rounded-lg mb-8" />

        {/* Title and badges */}
        <div className="flex gap-2 mb-3">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-2/3 mb-8" />

        {/* Tech stack */}
        <div className="flex gap-2 mb-8">
          <Skeleton className="h-7 w-16 rounded" />
          <Skeleton className="h-7 w-20 rounded" />
          <Skeleton className="h-7 w-14 rounded" />
          <Skeleton className="h-7 w-18 rounded" />
          <Skeleton className="h-7 w-22 rounded" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </main>
  );
}
