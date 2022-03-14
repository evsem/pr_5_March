import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
  }, [posts, sort])

  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  let sortPosts = useSortedPosts(posts, sort)

  const searchedAndSelectedPosts = useMemo(() => {
    return sortPosts.filter((post) => post.title.toLowerCase().includes(query))
  }, [sortPosts, query])

  return searchedAndSelectedPosts
}
