import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     setToDo(e.currentTarget.value);
//     setToDoError("")
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

interface IForm {
  email: string;
  firstName: string;
  lastName?: string;
  userName: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." });
  };
  console.log(errors);
  // console.log(watch())
  // console.log(register("toDo"))
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              nonico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
              value.includes("Nick") ? "no nicks allowed" : true,
            },
          })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>

        <input
          {...register("lastName", { required: "write here" })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>

        <input
          {...register("userName", { required: "write here", minLength: 10 })}
          placeholder="userName"
        />
        <span>{errors?.userName?.message}</span>

        <input
          {...register("password", { required: "write here", minLength: 8 })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 8, message: "your password is too short" },
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
