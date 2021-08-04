import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Container } from '@material-ui/core'
import Header from './components/header/Header'

function App() {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/plane'
      )

      console.log(data)
      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryApi()
  }, [])
  return (
    <div className='App'>
      <Container className='container' maxWidth='md'>
        <Header />
      </Container>
    </div>
  )
}

export default App
