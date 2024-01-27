import DashboardSidebar from "@/layout/DashboardSidebar"
import { getServerSession } from "next-auth"
import { authOption } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
async function DashboardLayout({ children }) {
    const session=await getServerSession(authOption)
    if(!session)redirect("/signin");
    return (
        <div>
            <DashboardSidebar>
            {children}
            </DashboardSidebar>
        </div>
    )
    
}

export default DashboardLayout