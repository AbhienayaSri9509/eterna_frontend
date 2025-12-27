import React from 'react'
import { Token } from '../types'
import clsx from 'clsx'

const Price = ({ price, prev }: { price: number; prev?: number }) => {
  const diff = prev == null ? 0 : price - prev
  const up = diff > 0
  return (
    <div className="flex items-center gap-3">
      <div className={clsx('font-mono', up ? 'text-green-600' : 'text-red-600')}>
        ${price.toFixed(4)}
      </div>
      <div className="text-sm text-slate-500">{(diff / (prev || price) * 100).toFixed(2)}%</div>
    </div>
  )
}

export default React.memo(function TokenRow({ token, prev }: { token: Token; prev?: number }) {
  return (
    <div className="grid grid-cols-6 gap-4 items-center py-3 px-2 hover:bg-slate-50 transition-colors">
      <div className="col-span-1">
        <div className="text-sm font-medium">{token.symbol}</div>
        <div className="text-xs text-slate-500">{token.name}</div>
      </div>
      <div className="col-span-1">
        <Price price={token.price} prev={prev} />
      </div>
      <div className="col-span-1 text-sm">{token.category}</div>
      <div className="col-span-1 text-sm">{token.change24h}%</div>
      <div className="col-span-2 text-right">
        <button className="px-3 py-1 bg-slate-100 rounded hover:bg-slate-200">Details</button>
      </div>
    </div>
  )
})
