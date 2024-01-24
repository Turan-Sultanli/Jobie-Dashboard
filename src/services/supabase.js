import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hvywjcwtfwqvregnbkef.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2eXdqY3d0ZndxdnJlZ25ia2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzODkzODcsImV4cCI6MjAyMDk2NTM4N30.2ZZCyWYftGspwmiGpKzMOtDjZnZhEeCmqWfCEiLHIo4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
