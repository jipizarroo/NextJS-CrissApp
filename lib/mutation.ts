import fetcher from './fetcher'

export const auth = (
  mode: 'signin' | 'signup',
  body: { email: string; password: string; name?: string }
) => {
  return fetcher(`/${mode}`, body)
}

export const createRaceAPI = (body: {
  name: string
  stages: JSON
  belongsTo: number
}) => {
  return fetcher('/races/createrace', body)
}

export const createStrategyAPI = (body: {
  foodGroup: JSON
  belongsTo: number
  belongsToRace: number
}) => {
  return fetcher('/strategy/createstrategy', body)
}
