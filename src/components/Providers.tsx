import { useState } from "react"
import { QueryClient} from "@tanstack/react-query"

const Provider = ()=> {
    const {queryClient} = useState(()=> new queryClient())
}

export default Provider