import { useEffect, useRef } from 'react'
import { Token } from '../types'
import { store } from '../store'
import { updatePrice } from '../store/slices/tokensSlice'

export function useMockWs(tokens: Token[]) {
  const ref = useRef<number | null>(null)

  useEffect(() => {
    if (ref.current) window.clearInterval(ref.current)
    ref.current = window.setInterval(() => {
      // pick random token and change price slightly
      if (tokens.length === 0) return
      const idx = Math.floor(Math.random() * tokens.length)
      const t = tokens[idx]
      const delta = (Math.random() - 0.5) * 0.02 * t.price
      const newPrice = Math.max(0.0001, +(t.price + delta).toFixed(6))
      store.dispatch(updatePrice({ id: t.id, price: newPrice }))
    }, 1200)

    return () => {
      if (ref.current) window.clearInterval(ref.current)
    }
  }, [tokens])
}
