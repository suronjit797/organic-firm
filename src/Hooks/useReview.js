import { useEffect, useState } from "react"


let useReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('rating.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    }, [])

    return [reviews, setReviews]
}

export default useReview