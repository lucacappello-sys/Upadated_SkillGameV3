import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wioipjehjipybmwdzfvt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpb2lwamVoamlweWJtd2R6ZnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzODA5MzAsImV4cCI6MjA3NDk1NjkzMH0.hwGXmF2KMAIHU6n6fQV8XaghKZD6kU_uA4smRFvRhhg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
