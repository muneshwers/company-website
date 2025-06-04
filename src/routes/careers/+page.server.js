// @ts-nocheck
import { supabase } from "$lib/supabaseClient";

export async function load() {
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