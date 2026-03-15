"use client";

import { useRef, useState } from "react";

export default function NewsletterSignup() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const email = (new FormData(form).get("email") as string)?.trim() || "";
    if (!email) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="email"
          name="email"
          className="form-control border-white p-3"
          placeholder="Your Email"
          required
          disabled={status === "sending"}
        />
        <button
          type="submit"
          className="btn btn-dark"
          disabled={status === "sending"}
        >
          {status === "sending" ? "…" : "Sign Up"}
        </button>
      </div>
      {status === "success" && (
        <small className="text-white mt-2 d-block">Thanks for signing up!</small>
      )}
      {status === "error" && (
        <small className="text-warning mt-2 d-block">{errorMessage}</small>
      )}
    </form>
  );
}
