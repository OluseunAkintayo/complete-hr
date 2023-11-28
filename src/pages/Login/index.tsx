import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginProps, loginSchema } from "./utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { Fragment } from "react";
import axios, { AxiosResponse } from "axios";

const Login = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [show, setShow] = React.useState<boolean>(false);
  const toggle = () => setShow((prop) => !prop);

  React.useEffect(() => {
    document.title = "Login | Complete HR";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const login = async (data: LoginProps) => {
    setIsLoading(true);
    setError(null);
    const config = {
      method: "POST",
      url: "employees/login",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: `username=${data.username}&password=${data.passcode}`,
    };
    try {
      const response: AxiosResponse = await axios.request(config);
      if (response.status === 200) {
        if (response.data.status) {
          window.location.href = "/dashboard";
          document.cookie = `access_token=${response.data.accessToken}`;
        }
      }
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response?.data.status === 0) {
          setError("Username or password incorrect");
        }
      } else {
        setError("An error occurred while logging in");
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen grid place-content-center">
      <Card className="w-full max-w-[400px]">
        <form onSubmit={handleSubmit(login)} autoComplete="off">
          <CardHeader>
            <CardTitle className="text-3xl">Login</CardTitle>
            <CardDescription>
              Enter username and password to continue.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username" className="mb-1">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  {...register("username")}
                  disabled={isLoading}
                />
                <>
                  {errors?.username?.message && (
                    <span className="text-red-600 text-xs">
                      {errors?.username.message}
                    </span>
                  )}
                </>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="passcode" className="mb-1">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="passcode"
                    placeholder="Enter your password"
                    type={show ? "text" : "password"}
                    {...register("passcode")}
                    disabled={isLoading}
                  />
                  <span
                    className="text-xs absolute right-2 cursor-pointer select-none top-1 bottom-1 grid place-items-center bg-white px-1"
                    onClick={toggle}
                  >
                    {show ? "HIDE" : "SHOW"}
                  </span>
                </div>
                <Fragment>
                  {errors?.passcode?.message && (
                    <span className="text-red-600 text-xs">
                      {errors?.passcode.message}
                    </span>
                  )}
                  {error && (
                    <span className="text-red-600 text-xs block mt-4">
                      {error}
                    </span>
                  )}
                </Fragment>
              </div>
            </div>
          </CardContent>
          <CardFooter className="">
            <Button
              className={`w-full py-6 ${isLoading ? "animate-pulse" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;

// animate-pulse bg-muted
