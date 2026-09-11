import { useState } from 'react'
import { getImageCandidates } from '../services/content'

type StorylinesImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  source: string
}

export function StorylinesImage({ source, alt, ...props }: StorylinesImageProps) {
  const candidates = getImageCandidates(source)
  const [candidateIndex, setCandidateIndex] = useState(0)

  const handleError = () => {
    setCandidateIndex((current) => Math.min(current + 1, candidates.length - 1))
  }

  return (
    <img
      {...props}
      src={candidates[candidateIndex]}
      alt={alt}
      onError={handleError}
    />
  )
}
