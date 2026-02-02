"use client";
import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <div className="page-container">
      <AuthForm mode="login" />

      <style jsx>{`
        .page-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.05) 0%, transparent 40%);
        }
      `}</style>
    </div>
  );
}
