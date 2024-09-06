import React from 'react'
import {ClientSideSuspense, LiveblocksProvider} from  "@liveblocks/react/suspense";

const Provider = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <LiveblocksProvider publicApiKey={"pk_prod_KdUw6gxRH1KkOdZUTLxjMRgB1w0KSc6fQ78WECj6291SJsTQLZ-BDeCilogu4QXA"}>
        //will add room here later
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
    </div>
  )
}

export default Provider
