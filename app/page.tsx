/* eslint-disable */
"use client"
import React, { useState } from 'react';
import { CopyIcon } from "@radix-ui/react-icons"
import { GoogleButton } from "@/components/google-button";
import { Button } from "@/components/ui/button";
import { FluidRippleButton } from "@/components/ui/fluid-ripple-button";
import { useRouter } from 'next/navigation'
import { Copy } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Home() {

  const [copied, setCopied] = useState(false);
  const email = "charleslazaroni@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col justify-between">

      <div>

        <div className="flex items-right flex-col" style={{ paddingLeft: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '36px', fontFamily: 'helvetica, futura' }}>CHARLES LAZARONI</h1>
          <h1 style={{ fontSize: '16px' }}>(talks to computers)</h1>
        </div>

        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <hr style={{ height: '2px', backgroundColor: 'var(--foreground)', border: 'none', width: '100%' }} />
        </div>

        <div className="flex items-start" style={{ paddingTop: '20px', paddingBottom: '20px'}}>

          <div className="flex flex-1 flex-col pl-5 items-start" style={{ flexBasis: '60%' }}>
            
          <Dialog>
      <DialogTrigger asChild>
        <div
          style={{
            width: '100%',
            marginBottom: '20px',
            fontFamily: 'helvetica',
            fontSize: '30px',
            lineHeight: '1.2',
          }}
        >
          <FluidRippleButton
            variant="default"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1.25em 1em',
            }}
          >
            CONTACT ME
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              style={{ width: '1.5em', height: '1.5em' }}
            >
              <path d="M1 12h18M12 5l7 7-7 7" />
            </svg>
          </FluidRippleButton>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}>
        <DialogHeader>
          <DialogTitle style={{ color: 'var(--foreground)' }}>Contact Me</DialogTitle>
          <DialogDescription style={{ color: 'var(--foreground-muted, var(--foreground))' }}>
            Send me an email, I'll get back to you ASAP
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="charleslazaroni@gmail.com"
              readOnly
              style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
            />
          </div>
          <Button onClick={copyToClipboard} type="submit" size="lg" className="px-3" style={{
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
          }}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
          <GoogleButton />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" style={{
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)',
            }}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>


            
            <hr style={{ height: '2px', backgroundColor: 'var(--foreground)', border: 'none', width: '100%' }} />
            <div style={{ height: '20px' }}></div>
            <Button variant="link" onClick={() => router.push('/resume')} >* my resume</Button>
            <Button variant="link" onClick={() => router.push('/projects')} >* something fun</Button>
            <Button variant="link" onClick={() => router.push('/about')}>* what I have to say for myself</Button>
            <div style={{ height: '20px' }}></div>
          </div>
          <div style={{ width: '20px' }}></div>
          <div className="flex-1 border-l-2 h-screen" style={{ borderColor: 'var(--foreground)' }}></div>
          </div>
      </div>
    </div>
  );
}
