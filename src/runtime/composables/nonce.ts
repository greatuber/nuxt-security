import { useNuxtApp } from '#imports'

export function useNonce () {
  return useNuxtApp().ssrContext?.event?.context.nonce as string
}
