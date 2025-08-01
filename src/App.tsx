import React, { useState } from "react";
import CryptoChart from "./components/CryptoChart";

type TabType = "Indices" | "Stocks" | "Crypto" | "Futures" | "Forex";

type MarketEntry = {
  name: string;
  value: number;
  change: number;
  currency: string;
};

const marketData: Record<TabType, MarketEntry[]> = {
  Indices: [
    { name: "S&P 500", value: 6339.38, change: -0.37, currency: "USD" },
    { name: "Nasdaq 100", value: 23218.12, change: -0.55, currency: "USD" },
    { name: "Dow 30", value: 44130.99, change: -0.74, currency: "USD" },
    { name: "Japan 225", value: 40799.55, change: -0.66, currency: "JPY" },
  ],
  Stocks: [
    { name: "Pato Tilín", value: 9999.99, change: +99.99, currency: "PTT" },
  ],
  Crypto: [],
  Futures: [],
  Forex: [],
};

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("Indices");

  const sampleChartData = [
  { time: '10:00', price: 100 },
  { time: '10:05', price: 102 },
  { time: '10:10', price: 101 },
  { time: '10:15', price: 103 },
  { time: '10:20', price: 105 },
  ];

  const uniqueTokens = Array.from(
  new Set(marketData[activeTab].map((item) => item.name.split("/")[0]))
  );

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Navbar */}
      <header style={{ background: "#000", color: "#fff", padding: "1rem", display: "flex", justifyContent: "space-between" }}>
        <div><strong>StarkAdvisor</strong></div>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <input type="text" placeholder="Search " />
          <a href="#">Products</a>
          <a href="#">Community</a>
          <a href="#">Markets</a>
          <a href="#">Brokers</a>
          <a href="#">More</a>
        </nav>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button>EN</button>
          <button style={{ background: "#2563eb", color: "#fff", border: "none", padding: "0.5rem 1rem", borderRadius: "4px" }}>Get started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        height: "70vh",
        backgroundImage: "url(/Plantilla_Stonks.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "2rem"
      }}>
        <div>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>StarkAdvisor.</h1>
          <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>The best trades require research, then commitment.</p>
          <button style={{ marginTop: "1.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "6px" }}>
            Get started for free
          </button>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}></p>
        </div>
      </section>

      {/* Market Summary */}
      <section style={{ backgroundColor: "#f8f9fa", color: "#000", padding: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Market summary</h2>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          {(Object.keys(marketData) as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                backgroundColor: activeTab === tab ? "#e2e8f0" : "#f1f5f9",
                fontWeight: activeTab === tab ? "bold" : "normal",
                border: "none",
                cursor: "pointer"
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
          {marketData[activeTab].length === 0 ? (
            <p>No data available</p>
          ) : (
            marketData[activeTab].map((entry) => (
              <div key={entry.name} style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "1rem" }}>
                <strong>{entry.name}</strong>
                <p>
                  {entry.value.toLocaleString()} {entry.currency}{" "}
                  <span style={{ color: entry.change < 0 ? "red" : "green" }}>
                    {entry.change > 0 ? "+" : ""}
                    {entry.change}%
                  </span>
                </p>

                {/* 🎯 Gráfico pequeño justo debajo del token */}
                <div style={{ width: "100%", height: "100px", marginTop: "1rem" }}>
                  <CryptoChart name={entry.name} data={sampleChartData} />
                </div>
              </div>
            ))
          )}
        </div>

      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1b1b1b", color: "#fff", padding: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>TradingView</h3>
          <p>© 2025 StarkAdvisor.</p>
        </div>
        <div style={{ display: "flex", gap: "4rem" }}>
          <div>
            <h4 style={{ fontWeight: "bold" }}>More than a product</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#ccc" }}>Supercharts</a></li>
              <li><a href="#" style={{ color: "#ccc" }}>Screener</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: "bold" }}>Contact Info</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#ccc" }}>Social network</a></li>
              <li><a href="#" style={{ color: "#ccc" }}>Moderators</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

