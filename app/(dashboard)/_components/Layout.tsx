import Sidebar from "./Sidebar"


function Layout({ children }: any) {
  return (
    <div className="layout">
      <div className="flex">
        <Sidebar />
      </div>
      <main className="flex-1 ml-64 bg-gray-100 min-h-screen p-6">
        {children}
      </main>
    </div>
  )
}

export default Layout