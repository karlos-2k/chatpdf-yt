//  This page is only purpose is to sync log in user and remain in database
import { useRouter, useSearchParams } from "next/navigation"

const Page = ()=> {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const apiResponse = fetch('/api/whatever')
}

export default Page