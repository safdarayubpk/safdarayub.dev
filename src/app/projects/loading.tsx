import { ProjectCardSkeleton } from "@/components/projects/project-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <Skeleton className="h-4 w-32 mb-4" />
        <Skeleton className="h-10 w-48 mb-3" />
        <Skeleton className="h-6 w-80 mb-12" />

        {/* Filter tabs skeleton */}
        <div className="flex gap-2 mb-8">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>
    </main>
  );
}
