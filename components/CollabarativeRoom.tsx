'use client'

import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'

const CollabarativeRoom = () => {
  return (
    <div>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
            <div className="collabarative-room">
                <Header>
                <div className="flex items-center w-fit justify-center gap-2">
                <p className="document-title">Share</p>
                </div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </Header>
                <Editor />
            </div>
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  )
}

export default CollabarativeRoom
