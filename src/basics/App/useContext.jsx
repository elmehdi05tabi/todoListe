import {useContext}from 'react'
import themContexte from './App' ; 
export default function useContext() {
    const isDark = useContext() ; 
  return (
    <themContexte.consumer>
    <div>useContext</div>
    </themContexte.consumer>
  )
}
