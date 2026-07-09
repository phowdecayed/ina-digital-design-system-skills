import { useEffect, useRef } from 'react'

export function AdoptionChart({ series, categories }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !window.ApexCharts) return
    const chart = new window.ApexCharts(ref.current, {
      chart: { type: 'line', toolbar: { show: false }, fontFamily: 'inherit' },
      series,
      xaxis: { categories },
      stroke: { curve: 'smooth', width: 3 },
      colors: ['#BE0000', '#1F2937', '#0EA5E9'],
      grid: { borderColor: '#E5E7EB' },
      dataLabels: { enabled: false },
      legend: { position: 'top' },
    })
    chart.render()
    return () => chart.destroy()
  }, [series, categories])

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Grafik garis tren adopsi komponen IDDS per kategori"
      className="h-72 w-full"
    />
  )
}
