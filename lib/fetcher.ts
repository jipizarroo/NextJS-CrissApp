export function createApiError(
  message: string,
  status: number,
  response: Response
) {
  return {
    message,
    status,
    response,
    toString() {
      return `ApiError: ${this.message} (status: ${this.status})`
    },
  }
}

export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 400) {
        throw createApiError('Bad Request', res.status, res)
      } else if (res.status === 401) {
        throw createApiError('Unauthorized', res.status, res)
      } else if (res.status === 404) {
        throw createApiError('Not Found', res.status, res)
      } else if (res.status === 500) {
        throw createApiError('Internal Server Error', res.status, res)
      } else if (res.status > 399 || res.status < 200) {
        throw createApiError(`Error ${res.status}`, res.status, res)
      }
      return res.json()
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error)
      // eslint-disable-next-line no-alert
      window.alert(error.message)
      throw error
    })
}
