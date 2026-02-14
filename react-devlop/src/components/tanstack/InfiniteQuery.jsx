import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchFruits = ({ pageParam = 1 }) => {
    return axios.get(
        `http://localhost:4000/fruits?_limit=4&_page=${pageParam}`
    )
}

const InfiniteQuery = () => {
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

    if (isLoading) {
        return <h2>Page is Loading...</h2>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div className="container">
            {data.pages.map((page, i) =>
                <div className="flex flex-col gap-4 mt-4">
                    {
                        page.data.map((fruit) => (
                            <div className='flex w-full justify-between border-2 border-amber-200 p-8' key={fruit.id}>
                                <span>🍇</span>
                                <span> {fruit.name}</span>
                            </div>

                        ))
                    }
                </div>
            )}
            <button
                className='mt-3'
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
            >
                {isFetchingNextPage
                    ? "Loading more..."
                    : hasNextPage
                        ? "Load more"
                        : "No more data"}
            </button>
        </div>
    )
}

export default InfiniteQuery
