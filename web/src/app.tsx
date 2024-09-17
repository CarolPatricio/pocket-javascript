
import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
// import { EmptyGoals } from './components/ui/empty-goals'

export function App() {
  return (
    <Dialog>
      <Summary/>
        {/* <EmptyGoals/> */}
        <CreateGoal/>
    </Dialog>
  )
}
