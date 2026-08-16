const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-bg-secondary h-screen flex justify-center items-center p-5">
      <div className="px-8 py-15 bg-bg-main rounded-md w-120 shadow-2xl flex flex-col items-center text-text-main">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
