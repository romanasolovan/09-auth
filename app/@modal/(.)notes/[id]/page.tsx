import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import NotePreview from './NotePreview.client'
import { fetchNoteById } from '@/lib/api/serverApi'

interface NotePreviewPageProps {
  params: Promise<{ id: string }>
}

const NotePreviewPage = async ({ params }: NotePreviewPageProps) => {
  const { id } = await params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview id={id} />
    </HydrationBoundary>
  )
}

export default NotePreviewPage
