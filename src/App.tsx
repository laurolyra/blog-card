import './App.css'
import BlogCard from './components/BlogCard'
import Credits from './components/Credits'

function App() {

  return (
    <div className='min-h-screen bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB]'>
      <div className='flex justify-center'>
        <BlogCard />
      </div>
      <div className='fixed bottom-6 left-6'>
        <Credits author="Lauro Lyra Aguiar" />
      </div>
    </div>
  )
}

export default App
