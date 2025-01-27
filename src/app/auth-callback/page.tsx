//  This page is only purpose is to sync log in user and remain in database
import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client"

const Page = async ()=> {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const {data, isLoading} = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({success}: any ) => {
            if (success){
                //user is synced to db
                router.push(origin ? `/${origin}` : '/dashboard')
            }
        },
    });
}

export default Page