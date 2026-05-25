import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../store/slices/pageSlice'
 
export const usePageTransition = (pageName) => {
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(setCurrentPage(pageName))
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pageName, dispatch])
}