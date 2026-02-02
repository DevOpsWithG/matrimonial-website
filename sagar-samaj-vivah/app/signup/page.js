"use client";
import AuthForm from '@/components/AuthForm';


export default function SignupPage() {
    return (
        <div className="page-container">
            <AuthForm mode="signup" />

            <style jsx>{`
        .page-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: radial-gradient(circle at top left, rgba(245, 158, 11, 0.05) 0%, transparent 40%);
        }
      `}</style>
        </div>
    );
}
