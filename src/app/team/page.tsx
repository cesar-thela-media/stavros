import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamCard, { TeamMember } from '@/components/TeamCard'

const teamMembers: TeamMember[] = [
  {
    name: 'Bridget Gonzalez',
    title: 'REALTOR\u00ae',
    photo: '/team/Bridget.jpeg',
    email: 'Bridget@StavrosRealty.com',
  },
  {
    name: 'Andrea Salazar',
    title: 'REALTOR\u00ae / Buyer\u2019s Agent / Real Estate Assistant',
    photo: '/team/Andrea.jpeg',
    email: 'Andrea@StavrosRealty.com',
  },
  {
    name: 'Sam Stavros',
    title: 'REALTOR\u00ae / Real Estate Assistant',
    photo: '/team/Sam.jpeg',
    email: 'Sam@StavrosRealty.com',
  },
  {
    name: 'Lisa Westwood',
    title: 'REALTOR\u00ae / Transaction Coordinator',
    photo: '/team/Lisa.png',
  },
  {
    name: 'April Costenbader',
    title: 'REALTOR\u00ae / Listing Coordinator',
    photo: '/team/April.png',
  },
  {
    name: 'Hanelanie Arana',
    title: 'Real Estate Assistant / Marketing Coordinator',
    photo: '/team/Hanelanie.png',
  },
  {
    name: 'Jordan Fredrick',
    title: 'Marketing Coordinator, APRE',
    photo: '/team/jordan.jpeg',
  },
]

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-black-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]"></div>
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-champagne-300">
                Our Team
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight font-serif sm:text-5xl lg:text-6xl">
                Meet the Stavros Realty Team
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-100">
                A relationship-driven team built to guide buyers, sellers, and investors with local expertise, responsive communication, and coordinated support at every stage of the process.
              </p>
            </div>
          </div>
        </section>

        {/* Team Member Cards */}
        {teamMembers.length > 0 && (
          <section id="team-roster" className="section-padding bg-misty-50">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
                  Our Team
                </h2>
                <p className="mt-4 text-base leading-7 text-primary-600 sm:text-lg">
                  Meet the professionals behind Stavros Realty Team, from licensed agents to operations and marketing support.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Spero - Featured Section */}
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-champagne-600">
                  Team Leadership
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
                  Meet Spero Stavros
                </h2>
                <p className="mt-6 text-lg text-primary-600">
                  <strong>Experience • Integrity • Excellence</strong> - Spero brings over 26 years of award-winning experience in real estate, representing luxury, custom home buyers, sellers, and builders at any price point.
                </p>
                <p className="mt-4 text-lg text-primary-600">
                  As a top-producing Keller Williams agent, Spero combines unmatched market knowledge with his unique background as VP of Business Operations and partial owner of a mortgage company, providing invaluable insights that save clients time, stress, and money.
                </p>
                <p className="mt-4 text-lg text-primary-600">
                  Backed by Keller Williams&apos; cutting-edge technology, comprehensive training, and global network of 170,000+ agents, Spero delivers world-class service with local expertise in Central Texas markets.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row sm:flex-nowrap gap-3">
                  <a
                    href="/#contact"
                    className="btn-primary shrink-0 whitespace-nowrap px-6 text-center"
                  >
                    Schedule a Consultation
                  </a>
                  <a
                    href="https://stavrosrealtyteam.kw.com/agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary shrink-0 whitespace-nowrap px-6 text-center"
                  >
                    View Full Profile
                  </a>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <img
                  src="/assets/SSTAVROS.jpg"
                  alt="Spero Stavros - REALTOR®"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
