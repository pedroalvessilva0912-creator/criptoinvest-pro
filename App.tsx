import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { CryptoData } from './types';
import useCryptoData from './hooks/useCryptoData';
import LoadingSpinner from './components/LoadingSpinner';
import RiskReturnAnalyzer from './components/NewsFeed';

function App() {
  const { cryptos, loading, error } = useCryptoData();
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);

  useEffect(() => {
    if (cryptos.length > 0 && !selectedCrypto) {
      setSelectedCrypto(cryptos[0]);
    }
  }, [cryptos, selectedCrypto]);

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {loading && (
          <div className="flex justify-center items-center" style={{ height: 'calc(100vh - 100px)' }}>
            <LoadingSpinner size="lg" />
          </div>
        )}
        {error && (
            <div className="text-red-500 text-center mt-10 p-4 bg-slate-800 rounded-lg">
                <p className="font-bold text-lg">Ocorreu um erro</p>
                <p>{error}</p>
            </div>
        )}
        {!loading && !error && cryptos.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Dashboard
                cryptos={cryptos}
                selectedCrypto={selectedCrypto}
                onCryptoSelect={setSelectedCrypto}
              />
            </div>
            <div className="lg:col-span-1">
              <RiskReturnAnalyzer selectedCrypto={selectedCrypto} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;