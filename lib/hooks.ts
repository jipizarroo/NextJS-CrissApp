import useSWR from 'swr'
import fetcher from './fetcher'

export const useMe = () => {
  const { data, error } = useSWR('/me', fetcher)

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export const useFindAllPublicFoods = () => {
  const { data, error } = useSWR('/publicfoods', fetcher)

  return {
    publicfoods: data as any,
    isLoading: !data && !error,
    isError: error,
  }
}

export const useFindAllRaces = () => {
  const { data, error } = useSWR('/races/findallraces', fetcher)

  return {
    races: data as any,
    isLoading: !data && !error,
    isError: error,
  }
}
