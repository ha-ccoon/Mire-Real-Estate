'use client'

import { useRouter } from 'next/navigation'

const Summary = () => {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}

export default Summary
