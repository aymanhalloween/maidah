"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-base text-secondary text-center">Thank you.</p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder={status === "error" ? "Try again" : "Email"}
        className={`flex-1 bg-transparent border-0 border-b px-0 py-3 text-base text-primary outline-none transition-colors duration-200 focus:ring-0 ${
          status === "error"
            ? "border-error placeholder:text-error"
            : "border-[#DDDDDD] placeholder:text-placeholder focus:border-primary"
        }`}
        disabled={status === "submitting"}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-primary text-white text-[13px] uppercase tracking-[0.08em] font-medium px-7 py-3 rounded-[4px] hover:bg-[#333333] active:bg-black transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-default"
      >
        {status === "submitting" ? "..." : "Join"}
      </button>
    </form>
  );
}
