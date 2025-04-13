'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { FC } from 'react'

export const WatchlistPagination: FC<{ currentPage: number; totalPages: number | null }> = ({  currentPage,  totalPages }) => {
  if (!totalPages) return null

  const getPageNumbers = () => {
    const pages = []
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      pages.push(i)
    }
    return pages
  }

  const buildUrlWithPage = (page: number) => {
    const params = new URLSearchParams(window.location.search)
    params.set('page', page.toString())
    return `?${params.toString()}`
  }

  const pageNumbers = getPageNumbers()

  return (
    <Pagination className="my-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currentPage > 1 ? buildUrlWithPage(currentPage - 1) : '#'}
            className="bg-transparent text-zinc-500"
          />
        </PaginationItem>
        {pageNumbers.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              href={buildUrlWithPage(page)}
              isActive={page === currentPage}
              className="bg-transparent text-zinc-500"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={currentPage < totalPages ? buildUrlWithPage(currentPage + 1) : '#'}
            className="bg-transparent text-zinc-500"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
