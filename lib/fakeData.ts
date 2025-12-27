import { Token } from '../types'
import { v4 as uuidv4 } from 'uuid'

export const initialTokens = (): Token[] => {
  const categories: Token['category'][] = ['New pairs', 'Final Stretch', 'Migrated']
  const symbols = ['AXM', 'TRD', 'PLS', 'MOON', 'SOLX', 'QUAD', 'LITE', 'ZEN']
  return symbols.map((s, i) => ({
    id: uuidv4(),
    symbol: s,
    name: `${s} Token`,
    price: +(Math.random() * (5 + i)).toFixed(4),
    change24h: +(Math.random() * 20 - 10).toFixed(2),
    category: categories[i % categories.length]
  }))
}
