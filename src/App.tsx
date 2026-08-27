import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WorkDenae from './pages/WorkDenae'
import WorkAnalysis from './pages/WorkAnalysis'
import WorkInaugural60 from './pages/WorkInaugural60'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/denae-benites" element={<WorkDenae />} />
        <Route path="/work/wpbl-first-month" element={<WorkAnalysis />} />
        <Route path="/work/inaugural-60" element={<WorkInaugural60 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
