// Supabase Utility File

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://axjjvdhffkxjpodokrcx.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4amp2ZGhmZmt4anBvZG9rcmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMjY3OTcsImV4cCI6MjAyODgwMjc5N30.sMIqgN0ri4Kx3qIsARDCVeibvFC0Ag43YwLJmoIFd_I'; // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;