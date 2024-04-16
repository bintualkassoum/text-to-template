const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://axjjvdhffkxjpodokrcx.supabase.co';
const supabaseKey = 'YeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4amp2ZGhmZmt4anBvZG9rcmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMjY3OTcsImV4cCI6MjAyODgwMjc5N30.sMIqgN0ri4Kx3qIsARDCVeibvFC0Ag43YwLJmoIFd_I';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;