'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Property } from '@/data/properties'
import PropertyImageBadges from './PropertyImageBadges'

type StatusFilter = 'all' | 'available' | 'sold' | 'under-construction' | 'pending'
type BedsFilter = 'any' | '2+' | '3+' | '4+'
type BathsFilter = 'any' | '2+' | '3+'
type SortOrder = 'default' | 'price-asc' | 'price-desc'

interface ListingsGridProps {
  properties: Property[]
}

const statusLabels: Record<StatusFilter, string> = {
  all: 'All Statuses',
  available: 'Available',
  sold: 'Sold',
  'under-construction': 'Under Construction',
  pending: 'Pending',
}

const bedsLabels: Record<BedsFilter, string> = {
  any: 'Any Beds',
  '2+': '2+ Beds',
  '3+': '3+ Beds',
  '4+': '4+ Beds',
}

const bathsLabels: Record<BathsFilter, string> = {
  any: 'Any Baths',
  '2+': '2+ Baths',
  '3+': '3+ Baths',
}

const sortLabels: Record<SortOrder, string> = {
  default: 'Default Order',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
}

function FilterSelect<T extends string>({
  value,
  onChange,
  options,
  labels,
}: {
  value: T
  onChange: (val: T) => void
  options: T[]
  labels: Record<T, string>
}) {
  const isActive = value !== options[0]
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className={`
        text-sm px-3 py-2 rounded-full border cursor-pointer
        appearance-none pr-8 bg-no-repeat
        transition-colors duration-150 outline-none
        focus:ring-2 focus:ring-gold-400
        ${
          isActive
            ? 'border-gold-500 bg-gold-50 text-gold-800 font-semibold'
            : 'border-misty-300 bg-white text-charcoal-700 hover:border-gold-400'
        }
      `}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a07850' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
        backgroundPosition: 'right 0.6rem center',
      }}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {labels[opt]}
        </option>
      ))}
    </select>
  )
}

export default function ListingsGrid({ properties }: ListingsGridProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [bedsFilter, setBedsFilter] = useState<BedsFilter>('any')
  const [bathsFilter, setBathsFilter] = useState<BathsFilter>('any')
  const [sortOrder, setSortOrder] = useState<SortOrder>('default')

  const isFiltered =
    statusFilter !== 'all' ||
    bedsFilter !== 'any' ||
    bathsFilter !== 'any' ||
    sortOrder !== 'default'

  const filtered = useMemo(() => {
    let result = [...properties]

    // Status filter
    if (statusFilter !== 'all') {
      result = result.filter((p) => {
        const s = p.status.toLowerCase()
        if (statusFilter === 'available') return s.includes('available') && !s.includes('under construction')
        if (statusFilter === 'sold') return s.includes('sold')
        if (statusFilter === 'under-construction') return s.includes('under construction') || s.includes('under-construction')
        if (statusFilter === 'pending') return s.includes('pending') || s.includes('under contract')
        return true
      })
    }

    // Beds filter (only applies to homes)
    if (bedsFilter !== 'any') {
      const minBeds = parseInt(bedsFilter)
      result = result.filter((p) => p.bedrooms !== null && p.bedrooms >= minBeds)
    }

    // Baths filter (only applies to homes)
    if (bathsFilter !== 'any') {
      const minBaths = parseInt(bathsFilter)
      result = result.filter((p) => p.bathrooms !== null && p.bathrooms >= minBaths)
    }

    // Sort
    if (sortOrder === 'price-asc') {
      result.sort((a, b) => {
        if (a.price === null && b.price === null) return 0
        if (a.price === null) return 1
        if (b.price === null) return -1
        return a.price - b.price
      })
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => {
        if (a.price === null && b.price === null) return 0
        if (a.price === null) return 1
        if (b.price === null) return -1
        return b.price - a.price
      })
    }

    return result
  }, [properties, statusFilter, bedsFilter, bathsFilter, sortOrder])

  function resetFilters() {
    setStatusFilter('all')
    setBedsFilter('any')
    setBathsFilter('any')
    setSortOrder('default')
  }

  return (
    <div>
      {/* Filter Bar */}
      <div className="border-b border-misty-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-charcoal-400 font-semibold mr-1 hidden sm:block">
              Filter
            </span>

            <FilterSelect
              value={statusFilter}
              onChange={setStatusFilter}
              options={['all', 'available', 'sold', 'under-construction'] as StatusFilter[]}
              labels={statusLabels}
            />

            <FilterSelect
              value={bedsFilter}
              onChange={setBedsFilter}
              options={['any', '2+', '3+', '4+'] as BedsFilter[]}
              labels={bedsLabels}
            />

            <FilterSelect
              value={bathsFilter}
              onChange={setBathsFilter}
              options={['any', '2+', '3+'] as BathsFilter[]}
              labels={bathsLabels}
            />

            <div className="hidden sm:block w-px h-5 bg-misty-300 mx-1" />

            <FilterSelect
              value={sortOrder}
              onChange={setSortOrder}
              options={['default', 'price-asc', 'price-desc'] as SortOrder[]}
              labels={sortLabels}
            />

            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-xs text-gold-700 hover:text-gold-900 underline underline-offset-2 ml-1 transition-colors"
              >
                Reset
              </button>
            )}

            <span className="ml-auto text-sm text-charcoal-400">
              Showing{' '}
              <span className="font-semibold text-charcoal-700">{filtered.length}</span>{' '}
              of{' '}
              <span className="font-semibold text-charcoal-700">{properties.length}</span>{' '}
              {properties.length === 1 ? 'property' : 'properties'}
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg
              className="w-16 h-16 text-misty-300 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <h3 className="text-2xl font-serif font-bold text-charcoal-700 mb-2">
              No properties match your filters
            </h3>
            <p className="text-charcoal-400 mb-8 max-w-sm">
              Try adjusting your search criteria to find the perfect property.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 rounded-full border border-gold-500 text-gold-700 font-semibold hover:bg-gold-50 transition-colors duration-150"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property) => (
              <Link
                key={property.id}
                href={`/listings/${property.slug}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={property.image}
                    alt={`${property.address} in ${property.city}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <PropertyImageBadges ribbonText={property.imageRibbonText} />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {property.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">
                    {property.address}
                  </h3>
                  <p className="text-primary-600 mb-2">
                    {property.city}, {property.state} {property.zipCode}
                  </p>
                  <p className="text-2xl font-bold text-gold-700 mb-4">
                    {property.price ? `$${property.price.toLocaleString()}` : 'Price upon request'}
                  </p>

                  {property.classification === 'home' ? (
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="font-semibold text-navy-900">
                          {property.squareFootage?.toLocaleString()}
                        </div>
                        <div className="text-sm text-primary-600">Sq Ft</div>
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900">{property.bedrooms}</div>
                        <div className="text-sm text-primary-600">Beds</div>
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900">{property.bathrooms}</div>
                        <div className="text-sm text-primary-600">Baths</div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 text-center">
                      <div className="text-lg font-semibold text-navy-900">Building Lot</div>
                      <div className="text-sm text-primary-600">
                        {property.lotSize || 'Ready for Construction'}
                      </div>
                    </div>
                  )}

                  <p className="text-primary-700 mb-4 line-clamp-2">{property.description}</p>

                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium text-gold-700">
                        {property.builder === 'Resale' ? 'Year Built:' : 'Completion:'}
                      </span>{' '}
                      <span className="text-primary-700">{property.completionDate}</span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center text-gold-700 font-medium group-hover:text-gold-800">
                      View Details
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
