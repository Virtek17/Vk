import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ulbwldmjztsezzrdytlf.supabase.co";
const SUPABSE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsYndsZG1qenRzZXp6cmR5dGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5OTc5OTYsImV4cCI6MjA0NjU3Mzk5Nn0.o0h_EICc1tvkoY7BggA_4DAzhiOGGKhkDQSTQRdJqR8";

const supabase = createClient(SUPABASE_URL, SUPABSE_API_KEY);
export default supabase;
