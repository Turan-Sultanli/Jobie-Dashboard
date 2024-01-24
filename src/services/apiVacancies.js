import supabase from "./supabase";

export async function getVacancies({ from, to }) {
  
  let query = supabase
  .from("vacancies")
  .select("*, companies(*)", { count: "exact" });
  query = query.range(from, to);
  
  const { data: vacancies, error, count } = await query;

  if (error) throw new Error("Could not get vacancies");

  return { vacancies, count };
}
