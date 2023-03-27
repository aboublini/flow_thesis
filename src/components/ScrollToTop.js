import { useEffect } from "react"

// Function that renders the top of every page
export const ScrollToTop = (x, y) => {
    useEffect(() => {
        window.scrollTo(x,y)
    })
};