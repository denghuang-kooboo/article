import memoryStorage from './memory-storage'
import { Storage } from './storage'

const store = typeof window !== 'undefined' && 'sessionStorage' in window
  ? window.sessionStorage
  : memoryStorage

const storageObject = new Storage(store)

export default storageObject
