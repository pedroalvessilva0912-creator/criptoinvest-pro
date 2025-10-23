
export interface HistoricalData {
  date: string;
  price: number;
}

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume24h: string;
  color: string;
  history: HistoricalData[];
}

// FIX: Added RiskReturnAnalysis interface to resolve import errors.
export interface RiskReturnAnalysis {
  nivelDeRisco: string;
  potencialDeRetorno: string;
  analise: string;
}
