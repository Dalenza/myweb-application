import SigninForm from "@/components/signin-form";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex justify-center items-center">
      <main className="shadow-lg p-8 min-w-[480px]">
        <SigninForm />
      </main>
    </div>
  );
}
