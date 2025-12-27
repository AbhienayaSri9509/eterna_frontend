import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTokens } from '../store/slices/tokensSlice'
import { initialTokens } from '../lib/fakeData'
import { RootState } from '../store'
import { useMockWs } from './useMockWs'

export function useTokens() {
  const dispatch = useDispatch()
  const tokens = useSelector((s: RootState) => s.tokens.items)

  useEffect(() => {
    if (tokens.length === 0) {
      const data = initialTokens()
      dispatch(setTokens(data))
    }
  }, [dispatch, tokens.length])

  useMockWs(tokens)

  return tokens
}
