import Heading from "../components/ui/Heading";
import LoginForm from "../features/authentication/components/LoginForm";
import AuthLayout from "../components/layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <Heading as="h2">Log in to your account</Heading>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
