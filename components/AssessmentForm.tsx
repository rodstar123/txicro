"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui";

interface AssessmentFormProps {
  locale: "en" | "es";
}

interface FormData {
  fullName: string;
  organization: string;
  roleTitle: string;
  email: string;
  phone: string;
  country: string;
  targetStates: string;
  timeline: string;
  objective: string;
  notes: string;
  feeAcknowledgment: boolean;
  privateOfficeAcknowledgment: boolean;
}

const labels = {
  en: {
    fullName: "Full Name",
    organization: "Organization",
    roleTitle: "Role / Title",
    email: "Email",
    phone: "Phone",
    country: "Country",
    targetStates: "Target U.S. State(s)",
    timeline: "Timeline",
    objective: "Objective",
    notes: "Notes",
    feeAcknowledgment:
      "I understand TXICRO is fee-based and does not accept commissions.",
    privateOfficeAcknowledgment:
      "I understand this is a private office, not a government agency.",
    submit: "Submit Assessment Request",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    selectTimeline: "Select timeline...",
    selectObjective: "Select objective...",
    successTitle: "Thank You",
    successMessage:
      "Your assessment request has been received. We will review your information and respond within 2 business days.",
  },
  es: {
    fullName: "Nombre Completo",
    organization: "Organizaci\u00f3n",
    roleTitle: "Cargo / T\u00edtulo",
    email: "Correo Electr\u00f3nico",
    phone: "Tel\u00e9fono",
    country: "Pa\u00eds",
    targetStates: "Estado(s) de EE.UU. Objetivo",
    timeline: "Plazo",
    objective: "Objetivo",
    notes: "Notas",
    feeAcknowledgment:
      "Entiendo que TXICRO cobra honorarios y no acepta comisiones.",
    privateOfficeAcknowledgment:
      "Entiendo que esta es una oficina privada, no una agencia gubernamental.",
    submit: "Enviar Solicitud de Evaluaci\u00f3n",
    required: "Este campo es obligatorio",
    invalidEmail: "Ingrese una direcci\u00f3n de correo v\u00e1lida",
    selectTimeline: "Seleccionar plazo...",
    selectObjective: "Seleccionar objetivo...",
    successTitle: "Gracias",
    successMessage:
      "Su solicitud de evaluaci\u00f3n ha sido recibida. Revisaremos su informaci\u00f3n y responderemos dentro de 2 d\u00edas h\u00e1biles.",
  },
};

const timelineOptions = [
  { en: "Immediate", es: "Inmediato" },
  { en: "1-3 Months", es: "1-3 Meses" },
  { en: "3-6 Months", es: "3-6 Meses" },
  { en: "6-12 Months", es: "6-12 Meses" },
  { en: "Exploratory", es: "Exploratorio" },
];

const objectiveOptions = [
  { en: "Market Entry", es: "Entrada al Mercado" },
  { en: "Expansion", es: "Expansi\u00f3n" },
  { en: "Risk Assessment", es: "Evaluaci\u00f3n de Riesgos" },
  { en: "Stakeholder Mapping", es: "Mapeo de Partes Interesadas" },
  { en: "Delegation Support", es: "Apoyo a Delegaciones" },
  { en: "Other", es: "Otro" },
];

const inputStyles =
  "w-full border border-gray-200 rounded-card px-4 py-3 font-body text-navy bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors duration-200";

const labelStyles = "block text-sm font-medium text-navy mb-1 font-body";

function RequiredMark() {
  return <span className="text-gold ml-0.5">*</span>;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-500 font-body">{message}</p>;
}

export default function AssessmentForm({ locale }: AssessmentFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const t = labels[locale];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      targetStates: "Texas",
    },
  });

  const onSubmit = (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log("Assessment form submission:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 sm:py-16">
        {/* Gold checkmark */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <svg
            className="h-8 w-8 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl text-navy mb-3">
          {t.successTitle}
        </h3>
        <p className="font-body text-slate max-w-md mx-auto text-lg">
          {t.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Row: Full Name + Organization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={labelStyles}>
            {t.fullName}
            <RequiredMark />
          </label>
          <input
            id="fullName"
            type="text"
            className={inputStyles}
            {...register("fullName", { required: t.required })}
          />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="organization" className={labelStyles}>
            {t.organization}
            <RequiredMark />
          </label>
          <input
            id="organization"
            type="text"
            className={inputStyles}
            {...register("organization", { required: t.required })}
          />
          <FieldError message={errors.organization?.message} />
        </div>
      </div>

      {/* Role / Title (optional) */}
      <div>
        <label htmlFor="roleTitle" className={labelStyles}>
          {t.roleTitle}
        </label>
        <input
          id="roleTitle"
          type="text"
          className={inputStyles}
          {...register("roleTitle")}
        />
      </div>

      {/* Row: Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelStyles}>
            {t.email}
            <RequiredMark />
          </label>
          <input
            id="email"
            type="email"
            className={inputStyles}
            {...register("email", {
              required: t.required,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t.invalidEmail,
              },
            })}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className={labelStyles}>
            {t.phone}
          </label>
          <input
            id="phone"
            type="tel"
            className={inputStyles}
            {...register("phone")}
          />
        </div>
      </div>

      {/* Row: Country + Target States */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className={labelStyles}>
            {t.country}
            <RequiredMark />
          </label>
          <input
            id="country"
            type="text"
            className={inputStyles}
            {...register("country", { required: t.required })}
          />
          <FieldError message={errors.country?.message} />
        </div>
        <div>
          <label htmlFor="targetStates" className={labelStyles}>
            {t.targetStates}
          </label>
          <input
            id="targetStates"
            type="text"
            className={inputStyles}
            {...register("targetStates")}
          />
        </div>
      </div>

      {/* Row: Timeline + Objective */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="timeline" className={labelStyles}>
            {t.timeline}
            <RequiredMark />
          </label>
          <select
            id="timeline"
            className={inputStyles}
            defaultValue=""
            {...register("timeline", { required: t.required })}
          >
            <option value="" disabled>
              {t.selectTimeline}
            </option>
            {timelineOptions.map((opt) => (
              <option key={opt.en} value={opt.en}>
                {opt[locale]}
              </option>
            ))}
          </select>
          <FieldError message={errors.timeline?.message} />
        </div>
        <div>
          <label htmlFor="objective" className={labelStyles}>
            {t.objective}
            <RequiredMark />
          </label>
          <select
            id="objective"
            className={inputStyles}
            defaultValue=""
            {...register("objective", { required: t.required })}
          >
            <option value="" disabled>
              {t.selectObjective}
            </option>
            {objectiveOptions.map((opt) => (
              <option key={opt.en} value={opt.en}>
                {opt[locale]}
              </option>
            ))}
          </select>
          <FieldError message={errors.objective?.message} />
        </div>
      </div>

      {/* Notes (optional) */}
      <div>
        <label htmlFor="notes" className={labelStyles}>
          {t.notes}
        </label>
        <textarea
          id="notes"
          rows={4}
          className={inputStyles}
          {...register("notes")}
        />
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-gold accent-gold shrink-0"
              {...register("feeAcknowledgment", { required: t.required })}
            />
            <span className="text-sm text-slate font-body">
              {t.feeAcknowledgment}
              <span className="text-gold ml-0.5">*</span>
            </span>
          </label>
          <FieldError message={errors.feeAcknowledgment?.message} />
        </div>
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-gold accent-gold shrink-0"
              {...register("privateOfficeAcknowledgment", {
                required: t.required,
              })}
            />
            <span className="text-sm text-slate font-body">
              {t.privateOfficeAcknowledgment}
              <span className="text-gold ml-0.5">*</span>
            </span>
          </label>
          <FieldError message={errors.privateOfficeAcknowledgment?.message} />
        </div>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full md:w-auto"
        >
          {isSubmitting
            ? locale === "es"
              ? "Enviando..."
              : "Submitting..."
            : t.submit}
        </Button>
      </div>
    </form>
  );
}
