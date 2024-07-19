import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function CardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
        <Skeleton className="h-[100px] w-[150px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[50px]" />
        </div>
    </div>
  )
}

export default CardSkeleton