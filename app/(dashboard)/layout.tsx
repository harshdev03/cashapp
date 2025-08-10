import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
        <div className="flex w-full">
            <div className="pt-25" >
        <SidebarTrigger/>
            </div>
    
      <main className="pt-25 flex justify-center w-full">
        {children}
      </main>
      </div>
    </SidebarProvider>
  )
}