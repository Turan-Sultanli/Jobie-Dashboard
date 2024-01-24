import supabase from "./supabase";

export async function getApplications(paginationOpt, filterByStatus) {
  const { from, to } = paginationOpt;

  let query = supabase
    .from("applications")
    .select("*, vacancies(*, companies(*))", { count: "exact" });

  query = query.range(from, to);

  if (filterByStatus !== "all") query = query.eq("status", filterByStatus);

  const { data: applications, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Applications could not loaded");
  }

  return { applications, count };
}
