"use client"

import React, { useMemo, useState } from 'react'
import { useTokens } from '../hooks/useTokens'
import TokenRow from './TokenRow'
import Skeleton from './Skeleton'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function Table() {
  const tokens = useTokens()
  const items = useSelector((s: RootState) => s.tokens.items)
  const [sortKey, setSortKey] = useState<'price' | 'change' | 'symbol'>('price')
  const [dir, setDir] = useState<'asc' | 'desc'>('desc')

  const sorted = useMemo(() => {
    const copy = [...items]
    copy.sort((a, b) => {
      let v = 0
      if (sortKey === 'price') v = a.price - b.price
      if (sortKey === 'change') v = a.change24h - b.change24h
      if (sortKey === 'symbol') v = a.symbol.localeCompare(b.symbol)
      return dir === 'asc' ? v : -v
    })
    return copy
  }, [items, sortKey, dir])

  if (!tokens.length) {
    return (
      <div>
        <Skeleton className="h-8 mb-2" />
        <Skeleton className="h-8 mb-2" />
        <Skeleton className="h-8 mb-2" />
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 font-semibold text-sm border-b pb-2">
        <div className="col-span-1">Token</div>
        <div className="col-span-1 cursor-pointer" onClick={() => { setSortKey('price'); setDir(dir === 'asc' ? 'desc' : 'asc') }}>Price</div>
        <div className="col-span-1">Category</div>
        <div className="col-span-1 cursor-pointer" onClick={() => { setSortKey('change'); setDir(dir === 'asc' ? 'desc' : 'asc') }}>24h</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>
      <div>
        {sorted.map((t) => (
          <TokenRow key={t.id} token={t} />
        ))}
      </div>
    </div>
  )
}
