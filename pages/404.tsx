import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Error404() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/api')
  }, [])

  return 'Page not found'
}

export default Error404
