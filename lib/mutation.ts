import fetcher from './fetcher'

export const auth = (
  mode: 'signin' | 'signup',
  body: { email: string; password: string; name?: string }
) => {
  return fetcher(`/${mode}`, body)
}

export const createRaceAPI = (body: { name: string; stages: JSON }) => {
  return fetcher('/races/createrace', body)
}
