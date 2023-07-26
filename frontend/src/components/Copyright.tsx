import Link from 'next/link'

export function Copyright() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 por{' '}
      <Link
        href="https://arianebrandao.github.io"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
      >
        Ariane Brandão
      </Link>{' '}
      no NLW da{' '}
      <Link
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
        href="https://rocketseat.com.br"
      >
        Rocketseat
      </Link>
    </div>
  )
}
