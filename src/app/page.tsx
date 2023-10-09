import About from './components/aboutmodal'
import Calculator from './components/calculator'

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <nav className='w-full flex flex-row justify-between'>
        <h1 className='p-8 text-xl font-bold'>RPE Calculator</h1>
       <About/>
      </nav>
      <main className="pt-6">
        <Calculator/>
      </main>
    </div>
  )
}
