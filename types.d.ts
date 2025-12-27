export type Token = {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  category: 'New pairs' | 'Final Stretch' | 'Migrated'
}
