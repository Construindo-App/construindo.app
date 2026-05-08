'use server'

import { supabase } from '@/lib/supabase'

export async function submitDeletionRequest(formData: FormData) {
  const fullName = (formData.get('full_name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const confirmed = formData.get('confirmed') === 'on'

  if (!fullName || !email || !confirmed) {
    return { error: 'Preencha todos os campos e confirme a solicitação.' }
  }

  const { error } = await supabase.from('deletion_requests').insert({
    full_name: fullName,
    email,
    confirmed,
  })

  if (error) {
    console.error(error)
    return { error: 'Erro ao enviar solicitação. Tente novamente.' }
  }

  return { success: true }
}
