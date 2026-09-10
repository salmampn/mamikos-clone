"use client";

import {
  type FormEvent,
  useState,
} from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiEye,
  FiEyeOff,
  FiX,
} from "react-icons/fi";

import { SocialLoginButton } from "@/components/overlays/LoginDialog/SocialLoginButton";
import { AppButton } from "@/components/shared/AppButton";
import { DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type TenantLoginModalProps = {
  onBack: () => void;
  onClose: () => void;
};

const PHONE_NUMBER_PATTERN = /^0\d{9,14}$/;

function getPhoneError(phone: string) {
  const value = phone.trim();

  if (!value) {
    return null;
  }

  if (!value.startsWith("0")) {
    return "Nomor handphone harus dimulai dengan angka 0.";
  }

  if (!/^\d+$/.test(value)) {
    return "Nomor handphone hanya boleh berisi angka.";
  }

  if (!PHONE_NUMBER_PATTERN.test(value)) {
    return "Masukkan nomor handphone valid dengan 10–15 digit.";
  }

  return null;
}

export function TenantLoginModal({
  onBack,
  onClose,
}: TenantLoginModalProps) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const phoneError = getPhoneError(phone);
  const isPhoneValid = phone.trim().length > 0 && !phoneError;
  const isPasswordValid = password.trim().length > 0;

  const isLoginEnabled = isPhoneValid && isPasswordValid;
  const shouldShowPhoneError = isPhoneTouched && Boolean(phoneError);

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    setPhone(numericValue);
    setFeedback(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPhoneTouched(true);

    if (!isLoginEnabled) {
      return;
    }

    setFeedback(
      "Login Pencari Kos berhasil dikirim. Ini masih berupa demo tanpa autentikasi backend.",
    );
  };

  const handleSocialLogin = (provider: string) => {
    setFeedback(
      `Login dengan ${provider} belum dihubungkan pada versi demo ini.`,
    );
  };

  return (
    <div className="relative px-6 pb-8 pt-6 sm:px-7">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          aria-label="Kembali ke pilihan jenis akun"
          className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
        >
          <FiArrowLeft size={24} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup modal masuk"
          className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
        >
          <FiX size={22} aria-hidden="true" />
        </button>
      </div>

      <DialogTitle className="mt-5 text-2xl font-bold leading-tight text-foreground">
        Login Pencari Kos
      </DialogTitle>

      <div className="mt-7 space-y-3">
        <SocialLoginButton
          label="Sign in with Google"
          icon={<FcGoogle size={28} />}
          onClick={() => handleSocialLogin("Google")}
        />

        <SocialLoginButton
          label="Sign in with Facebook"
          icon={<FaFacebookSquare className="text-[#1877F2]" size={28} />}
          onClick={() => handleSocialLogin("Facebook")}
        />

        <SocialLoginButton
          label="Sign in with Apple"
          icon={<FaApple size={28} />}
          variant="apple"
          onClick={() => handleSocialLogin("Apple")}
        />
      </div>

      <div className="my-7 flex items-center gap-4">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">atau</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-7" noValidate>
        <label className="block">
          <span className="text-sm font-bold text-foreground">
            Nomor Handphone
          </span>

          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="numeric"
            value={phone}
            onChange={(event) => handlePhoneChange(event.target.value)}
            onBlur={() => setIsPhoneTouched(true)}
            placeholder="Contoh: 081234567890"
            aria-invalid={shouldShowPhoneError}
            aria-describedby={
              shouldShowPhoneError ? "tenant-phone-error" : undefined
            }
            className={cn(
              "mt-3 h-10 w-full border-0 border-b bg-transparent px-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:ring-0",
              shouldShowPhoneError
                ? "border-destructive focus:border-destructive"
                : "border-input focus:border-primary",
            )}
          />

          {shouldShowPhoneError && (
            <span
              id="tenant-phone-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs font-bold text-destructive"
            >
              <FiAlertCircle size={15} aria-hidden="true" />
              {phoneError}
            </span>
          )}
        </label>

        <label className="block">
          <span className="text-sm font-bold text-foreground">
            Password
          </span>

          <span className="relative mt-3 block">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setFeedback(null);
              }}
              placeholder="Masukkan password"
              className="h-10 w-full border-0 border-b border-input bg-transparent px-2 pr-11 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-0"
              required
            />

            <button
              type="button"
              onClick={() =>
                setIsPasswordVisible((currentValue) => !currentValue)
              }
              aria-label={
                isPasswordVisible
                  ? "Sembunyikan password"
                  : "Tampilkan password"
              }
              className="absolute right-0 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
            >
              {isPasswordVisible ? (
                <FiEyeOff size={20} aria-hidden="true" />
              ) : (
                <FiEye size={20} aria-hidden="true" />
              )}
            </button>
          </span>
        </label>

        <AppButton
          type="submit"
          variant="primary"
          size="lg"
          disabled={!isLoginEnabled}
          className="mt-1 w-full disabled:bg-muted disabled:text-muted-foreground disabled:opacity-100"
        >
          Login
        </AppButton>
      </form>

      {feedback && (
        <p
          role="status"
          className="mt-4 rounded-md border border-primary/20 bg-primary-soft px-3 py-2.5 text-xs leading-5 text-brand-800"
        >
          {feedback}
        </p>
      )}

      <div className="mt-5 space-y-4 text-center text-sm">
        <p className="text-muted-foreground">
          Belum punya akun Mamikos?{" "}
          <Link
            href="/bantuan?role=penyewa-kos"
            onClick={onClose}
            className="font-bold text-primary transition-colors hover:text-primary-hover hover:underline"
          >
            Daftar Sekarang
          </Link>
        </p>

        <Link
          href="/bantuan?role=penyewa-kos"
          onClick={onClose}
          className="inline-block font-bold text-primary transition-colors hover:text-primary-hover hover:underline"
        >
          Lupa password?
        </Link>
      </div>
    </div>
  );
}