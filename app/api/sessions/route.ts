import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const startSchema = z.object({
  simulationId: z.string().uuid(),
})

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const parsed = startSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { data: sim } = await supabase
    .from('simulations')
    .select('*')
    .eq('id', parsed.data.simulationId)
    .single()

  if (!sim || sim.publish_status !== 'published') {
    return NextResponse.json({ error: 'Simulation not found' }, { status: 404 })
  }

  const { data: existing } = await supabase
    .from('simulation_sessions')
    .select('*')
    .eq('user_id', user.id)
    .eq('simulation_id', parsed.data.simulationId)
    .eq('status', 'in_progress')
    .single()

  if (existing) {
    return NextResponse.json({ sessionId: existing.id, resumed: true })
  }

  const { data: session, error } = await supabase
    .from('simulation_sessions')
    .insert({ user_id: user.id, simulation_id: parsed.data.simulationId })
    .select('*')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ sessionId: session?.id, resumed: false }, { status: 201 })
}

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabase
    .from('simulation_sessions')
    .select('*')
    .eq('user_id', user.id)
    .order('started_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ sessions: data })
}
