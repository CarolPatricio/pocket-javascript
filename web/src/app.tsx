
import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { useEffect, useState } from 'react'
import { EmptyGoals } from './components/ui/empty-goals'
import { Summary } from './components/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
// import { Summary } from './components/summary'
// import { EmptyGoals } from './components/ui/empty-goals'


export function App() {
  const { data } =  useQuery({
    queryKey:['sumary'],
    queryFn: getSummary,
    staleTime: 1000 * 60 //60 seconds
  })

  return (
    <Dialog>
        {data && data.total > 0 ? <Summary/> :  <EmptyGoals/>}
        <CreateGoal/>
    </Dialog>
  )
}
