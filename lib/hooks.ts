import useSWR from 'swr'
import fetcher from './fetcher'

export const useMe = () => {
  const { data, error } = useSWR('/me', fetcher)

  return {
    return: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export const usePublicFoods = () => {
  const { data, error } = useSWR('/publicfoods', fetcher)

  return {
    publicfoods: data as any,
    isLoading: !data && !error,
    isError: error,
  }
}
