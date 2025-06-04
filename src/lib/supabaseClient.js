/* eslint-disable no-unused-vars */
// @ts-nocheck
import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js'

import {
	SUPABASE_URL,
	SUPABASE_KEY,
 } from '$env/static/private';

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {db: {schema: 'jobportal'}})