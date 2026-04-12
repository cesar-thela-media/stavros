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
    name: 'Kimberly De La Pena',
    title: 'Social Media Marketing Assistant',
    photo: '/team/kimberly.jpeg',
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
        {/* Spero - Full Bio Section */}
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
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

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="btn-primary"
                  >
                    Schedule a Consultation
                  </a>
                  <a
                    href="https://stavrosrealtyteam.kw.com/agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View Full Profile
                  </a>
                </div>
              </div>

              <div className="relative">
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

        {/* Team Member Cards */}
        {teamMembers.length > 0 && (
          <section className="section-padding bg-misty-50">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif text-center mb-10">
                Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
