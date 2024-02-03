import supabase from "./supabase";

export async function signup({ userName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// eslint-disable-next-line no-unused-vars
export async function recoverPassword({ email }) {
  
  throw new Error(
    "Could not update password in this demo app, Please sign in with default email and password",
  );

  // const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
  //   redirectTo: "http://localhost:5173/update-password",
  // });

  // if (error) throw new Error(error.message);

  // return data;
}

export async function updatePassword({ password }) {
  const { error } = await supabase.auth.updateUser({
    password: password,
  });
  console.log(password);
  if (error) throw new Error(error.message);
}


export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}


export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
