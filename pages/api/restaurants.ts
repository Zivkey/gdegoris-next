import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../lib/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { data, error } = await supabase
            .from('restaurants')
            .select('id, created_at, title, description, phone_number, address, city, working_hours')

        if (error) return res.status(400).json({ error: error.message })
        return res.status(200).json(data)
    }

    return res.status(405).json({ error: 'Method not allowed' })
}