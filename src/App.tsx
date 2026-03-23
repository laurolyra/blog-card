import './App.css'
import BlogCard from './components/BlogCard'
import Credits from './components/Credits'
import spaceJoy from './assets/spacejoy-YqFz7UMm8qE-unsplash.jpg'

function App() {

  return (
    <div className='min-h-screen bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB]'>
      <div className='flex justify-center'>
        <BlogCard
          imageAlt='living room'
          imageSrc={spaceJoy}
          title='Top 5 Living Room Inspirations'
          subtitle='Curated vibrants colors for your living, make it pop & calm in the same time.'
          tag='Interior'
        />
      </div>
      <div className='fixed bottom-6 left-6'>
        <Credits author="Lauro Lyra Aguiar" />
      </div>
    </div>
  )
}

export default App
