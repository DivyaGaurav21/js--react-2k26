import React, { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchFruits = ({ pageParam = 1 }) => {
  return axios.get(
    `http://localhost:4000/fruits?_limit=4&_page=${pageParam}`
  )
}

const Iq2 = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["fruits"],
    queryFn: fetchFruits,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      if (allPages.length < 6) {
        return allPages.length + 1
      }
      return undefined
    }
  })

  // 👇 SCROLL LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100

      if (bottomReached && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  if (isLoading) return <h2>Page is Loading...</h2>
  if (isError) return <h1>{error.message}</h1>

  return (
    <div className="container">
      {data.pages.map((page, i) => (
        <div key={i} className="flex flex-col gap-4 mt-4">
          {page.data.map((fruit) => (
            <div
              key={fruit.id}
              className="flex w-full justify-between border-2 border-amber-200 p-8"
            >
              <span>🍇</span>
              <span>{fruit.name}</span>
            </div>
          ))}
        </div>
      ))}

      {isFetchingNextPage && (
        <p className="text-center mt-4">Loading more...</p>
      )}
    </div>
  )
}

export default Iq2
