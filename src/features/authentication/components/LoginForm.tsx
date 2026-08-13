import { loginInputs } from "../constants/loginInputs";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { handleFormErrors } from "../../../utils/handleFormErrors";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setAccessToken } from "../store/authSlice";
import { useEffect } from "react";
import { selectIsAuthenticated } from "../store/authSelectors";
import { authStorage } from "../../../storage/authStorage";
import { requestNotificationPermission } from "../../../services/firebase/notifications";
import type { LoginPayload } from "../types";

import ErrorMessage from "../../../components/ui/ErrorMessage";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { mutate: login, isPending } = useLogin();
  const { register, handleSubmit, formState, setError } =
    useForm<LoginPayload>();
  const { errors } = formState;

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data: LoginPayload) => {
    const fcmToken = (await requestNotificationPermission()) || "no-token";

    await login(
      { ...data, fcm_token: fcmToken },
      {
        onError: (error) => {
          handleFormErrors({ error, setError });
        },
        onSuccess: (response) => {
          const accessToken = response.data.data.token.access_token;
          authStorage.save(accessToken);
          dispatch(setAccessToken(accessToken));
        },
      },
    );
  };

  return (
    <form
      className="flex flex-col gap-8 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        {loginInputs.map((input) => (
          <Input
            key={input.name}
            inputData={input}
            register={register}
            error={errors[input.name]?.message}
            disabled={isPending}
          />
        ))}
        {errors.root?.message && <ErrorMessage error={errors.root?.message} />}
      </div>

      <Button type="submit" variant="primary" disabled={isPending}>
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
