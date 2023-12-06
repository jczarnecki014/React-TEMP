import {useRouter} from 'next/router'

function SomeImportantNews() {
    const router = useRouter()
    const newsId = router.query.newsId
    return (
      <h1>This {newsId} page</h1>
    )
  }
  
  export default SomeImportantNews
  