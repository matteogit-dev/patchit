import { useEffect } from 'react'

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — PatchIT` : 'PatchIT — Traduzioni amatoriali per videogiochi PC'

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description || 'Patch di traduzione amatoriale in italiano per videogiochi PC senza localizzazione ufficiale.')
  }, [title, description])
}