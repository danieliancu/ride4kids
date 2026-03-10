import dynamic from "next/dynamic"

const ClientApp = dynamic(() => import("../src/app/ClientApp"), { ssr: false })

export default function Page() {
  return <ClientApp />
}
