"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export default function BlogShareButton({title}:{title:string}) {
  const [message,setMessage]=useState("");
  async function share(){try{await navigator.clipboard.writeText(window.location.href);setMessage("Link copied");window.setTimeout(()=>setMessage(""),2400);}catch{setMessage("Copy the link from your browser's address bar");window.setTimeout(()=>setMessage(""),3200);}}
  return <div className="flex items-center gap-3"><button type="button" onClick={share} aria-label={`Copy a link to ${title}`} className="inline-flex min-h-10 cursor-pointer items-center gap-2 border border-line px-4 text-[13px] font-semibold text-navy transition-colors hover:border-teal hover:text-teal">{message==="Link copied"?<Check className="h-4 w-4" aria-hidden="true"/>:<Share2 className="h-4 w-4" aria-hidden="true"/>}{message==="Link copied"?"Copied":"Share story"}</button><span role="status" aria-live="polite" className="text-[12px] text-navy/50">{message}</span></div>;
}
