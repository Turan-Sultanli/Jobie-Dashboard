import supabase from "./supabase";


export async function getCompanies({ from, to }) {
  
  let query = supabase
  .from("companies")
  .select("*, vacancies(id)", { count: "exact" });
  query = query.range(from, to);
  
  const { data: companies, error, count } = await query;

  if (error) throw new Error("Could not get companies");

  return { companies, count };
}

export async function getCompany(id) {
  const { data: company, error } = await supabase
    .from("companies")
    .select("*, vacancies(id)")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error("Could not get company");

  return company;
}
