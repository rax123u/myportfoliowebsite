export const measurePerformance = (label) => {
  const start = performance.now()
  return () => {
    const end = performance.now()
    console.log(`${label}: ${(end - start).toFixed(2)}ms`)
  }
}
 
export const observePerformance = () => {
  if (window.PerformanceObserver) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}ms`)
      })
    })
 
    observer.observe({ entryTypes: ['measure', 'navigation'] })
  }
}
 
export const reportWebVitals = (metric) => {
  console.log(`${metric.name}: ${metric.value}ms`)
}
 