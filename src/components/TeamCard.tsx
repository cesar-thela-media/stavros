import Image from 'next/image'

export interface TeamMember {
  name: string
  title: string
  photo?: string
  bio?: string
  email?: string
  profileUrl?: string
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group rounded-xl bg-white border border-misty-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-misty-100">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="h-20 w-20 text-misty-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-charcoal-900 font-serif">{member.name}</h3>
        <p className="mt-1 text-sm text-charcoal-600 leading-snug">{member.title}</p>

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-champagne-700 hover:text-champagne-800 transition-colors"
          >
            <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {member.email}
          </a>
        )}

        {member.profileUrl && (
          <a
            href={member.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-champagne-700 hover:text-champagne-800 transition-colors"
          >
            View Profile &rarr;
          </a>
        )}
      </div>
    </div>
  )
}
