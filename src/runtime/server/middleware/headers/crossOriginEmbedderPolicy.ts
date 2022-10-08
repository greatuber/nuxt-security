import { setHeader, defineEventHandler } from 'h3'
import { useRuntimeConfig } from '#imports'

const securityConfig = useRuntimeConfig().security

export default defineEventHandler((event) => {
  setHeader(event, 'Cross-Origin-Embedder-Policy', securityConfig.headers.crossOriginEmbedderPolicy.value)
})
