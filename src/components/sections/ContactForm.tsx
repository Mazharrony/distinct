"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { submitEnquiry } from "@/app/actions/enquiry";
import { initialEnquiryState, type EnquiryState } from "@/lib/enquiry";
import { services } from "@/content/services";

const propertyTypes = [
  "Villa",
  "Apartment",
  "Townhouse",
  "Office",
  "Retail unit",
  "Other commercial",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          Sending…
        </>
      ) : (
        <>
          <Send className="size-4" aria-hidden="true" />
          Send enquiry
        </>
      )}
    </Button>
  );
}

function Field({
  label,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: (ids: { id: string; describedBy?: string }) => React.ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy =
    [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-heading">
        {label}
        {required ? (
          <span className="ml-1 text-danger" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-muted">
            (optional)
          </span>
        )}
      </label>

      {children({ id, describedBy })}

      {hint ? (
        <p id={hintId} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-sm text-danger"
        >
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "min-h-12 w-full rounded-xl border border-line-strong bg-surface-raised px-4 text-base text-heading " +
  "transition-colors placeholder:text-muted hover:border-line-strong focus:border-accent " +
  "focus:outline-none";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction] = useActionState<EnquiryState, FormData>(
    submitEnquiry,
    initialEnquiryState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const renderedAtRef = useRef<HTMLInputElement>(null);

  // Stamped after mount, not during render: a render-time Date.now() differs
  // between server and client and would mismatch on hydration. An empty value
  // reads as "long ago" on the server, so the time trap never fires falsely.
  useEffect(() => {
    if (renderedAtRef.current) {
      renderedAtRef.current.value = String(Date.now());
    }
  }, []);

  // Move focus to the first invalid field, or to the status message.
  useEffect(() => {
    if (state.status === "idle") return;

    if (state.errors) {
      const firstKey = Object.keys(state.errors)[0];
      const field = formRef.current?.querySelector<HTMLElement>(
        `[name="${firstKey}"]`,
      );
      field?.focus();
      return;
    }

    statusRef.current?.focus();
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const values = state.values ?? {};

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Bot traps */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company-website">Company (leave blank)</label>
        <input
          id="company-website"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input ref={renderedAtRef} type="hidden" name="renderedAt" defaultValue="" />

      {state.status !== "idle" && state.message ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className={cn(
            "flex items-start gap-3 rounded-xl border p-4 text-sm",
            state.status === "success"
              ? "border-success/30 bg-success/5 text-success"
              : "border-danger/30 bg-danger/5 text-danger",
          )}
        >
          {state.status === "success" ? (
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          )}
          <span>{state.message}</span>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required error={state.errors?.name}>
          {({ id, describedBy }) => (
            <input
              id={id}
              name="name"
              type="text"
              autoComplete="name"
              defaultValue={values.name}
              aria-describedby={describedBy}
              aria-invalid={Boolean(state.errors?.name)}
              className={inputClass}
              placeholder="Jane Smith"
            />
          )}
        </Field>

        <Field
          label="Phone number"
          required
          error={state.errors?.phone}
          hint="So we can call you back to discuss the work."
        >
          {({ id, describedBy }) => (
            <input
              id={id}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              defaultValue={values.phone}
              aria-describedby={describedBy}
              aria-invalid={Boolean(state.errors?.phone)}
              className={inputClass}
              placeholder="+971 50 000 0000"
            />
          )}
        </Field>

        <Field label="Email address" error={state.errors?.email}>
          {({ id, describedBy }) => (
            <input
              id={id}
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={values.email}
              aria-describedby={describedBy}
              aria-invalid={Boolean(state.errors?.email)}
              className={inputClass}
              placeholder="you@example.com"
            />
          )}
        </Field>

        <Field label="Service required">
          {({ id }) => (
            <select
              id={id}
              name="service"
              defaultValue={defaultService ?? values.service ?? ""}
              className={cn(inputClass, "cursor-pointer appearance-none pr-10")}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23334155' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.9rem center",
                backgroundSize: "1.1rem",
              }}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.name}>
                  {service.name}
                </option>
              ))}
              <option value="Something else">Something else</option>
            </select>
          )}
        </Field>
      </div>

      <Field label="Property type">
        {({ id }) => (
          <div id={id} className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <label
                key={type}
                className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line-strong px-4 text-sm text-body transition-colors select-none has-checked:border-accent has-checked:bg-surface-tint has-checked:text-accent has-checked:font-medium hover:border-accent"
              >
                <input
                  type="radio"
                  name="propertyType"
                  value={type}
                  defaultChecked={values.propertyType === type}
                  className="sr-only"
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </Field>

      <Field
        label="Tell us about the work"
        error={state.errors?.message}
        hint="A short description helps us quote accurately — location, rough size and timescales are all useful."
      >
        {({ id, describedBy }) => (
          <textarea
            id={id}
            name="message"
            rows={5}
            defaultValue={values.message}
            aria-describedby={describedBy}
            aria-invalid={Boolean(state.errors?.message)}
            className={cn(inputClass, "min-h-32 resize-y py-3 leading-relaxed")}
            placeholder="For example: two-bedroom apartment in Dubai Marina, looking to renovate the main bathroom and repaint throughout."
          />
        )}
      </Field>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <SubmitButton />
        <p className="text-xs text-muted">
          We use your details only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}
