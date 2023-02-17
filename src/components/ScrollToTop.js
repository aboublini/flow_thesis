import { useEffect } from "react"
export const ScrollToTop = (x, y) => {
    useEffect(() => {
        window.scrollTo(x,y)
    })
};