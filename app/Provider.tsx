'use client'

import React from 'react'
import {ClientSideSuspense, LiveblocksProvider} from  "@liveblocks/react/suspense";
import Loader from '@/components/Loader';

const Provider = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
    </div>
  )
}

export default Provider
