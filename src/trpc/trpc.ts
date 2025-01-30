import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { initTRPC, TRPCError } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */

// it makes sure the user is autheticated
const middleware = t.middleware

const isAuth = middleware(async (opts)=>{
    const {getUser} = getKindeServerSession()
    const user = getUser()

    if(!user || !(await user).id){
        throw new TRPCError({ code: 'UNAUTHORIZED'})
    }

    return opts.next({
        ctx: {
            userId: (await user).id,
            user,
        }
    })
})

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth)