import { ReactNode } from "react"

type AuthGuardProps = {
    children: ReactNode
}
export function AuthGuard({children} : AuthGuardProps){
    // Redirect if not loged in
    return <> {children} </>
}