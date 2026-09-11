import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { loadStorylinesData } from './services/content'
import type { StorylinesData } from './data/sampleData'
import { HomePage } from './pages/HomePage'
import { StarsPage } from './pages/StarsPage'
import { ShowsPage } from './pages/ShowsPage'
import { AboutPage } from './pages/AboutPage'
import { PartnerPage } from './pages/PartnerPage'

function App() {
  const [data, setData] = useState<StorylinesData | null>(null)

  useEffect(() => {
    loadStorylinesData().then(setData)
  }, [])

  if (!data) {
    return <div className="loading-screen">Loading Storylines…</div>
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/stars" element={<StarsPage data={data} />} />
          <Route path="/shows" element={<ShowsPage data={data} />} />
          <Route path="/about" element={<AboutPage data={data} />} />
          <Route path="/partner" element={<PartnerPage data={data} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
