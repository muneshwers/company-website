// @ts-nocheck
import { supabase } from "$lib/supabaseClient";

export async function load({ setHeaders }) {
    setHeaders({ 'cache-control': 'max-age=300' }); // cache for 5 minutes

    const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false })
    // @ts-ignore
    const newJobs = data.filter(job => job.status === 'Active');

    return {
        newJobs
    }
}