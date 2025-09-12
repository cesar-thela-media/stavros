'use client'

import { useState } from 'react'

interface SearchFormData {
  location: string
  propertyType: string
  minPrice: string
  maxPrice: string
  bedrooms: string
  bathrooms: string
  searchType: string // 'sale', 'sold', 'rent'
}

export default function PropertySearch() {
  const [searchData, setSearchData] = useState<SearchFormData>({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    searchType: 'sale'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearch = () => {
    // Build URL parameters for KW search using their format
    const params = new URLSearchParams()
    
    // Handle price range (min,max format)
    if (searchData.minPrice !== 'any' || searchData.maxPrice !== 'any') {
      const minPrice = searchData.minPrice !== 'any' ? searchData.minPrice : ''
      const maxPrice = searchData.maxPrice !== 'any' ? searchData.maxPrice : ''
      if (minPrice || maxPrice) {
        params.append('price', `${minPrice},${maxPrice}`)
      }
    }
    
    // Handle bedrooms (value,null format)
    if (searchData.bedrooms && searchData.bedrooms !== 'any') {
      params.append('bedrooms', `${searchData.bedrooms},null`)
    }
    
    // Handle bathrooms (value,null format)  
    if (searchData.bathrooms && searchData.bathrooms !== 'any') {
      params.append('bathrooms', `${searchData.bathrooms},null`)
    }
    
    // Handle property subtype (map our types to KW format)
    if (searchData.propertyType && searchData.propertyType !== 'any') {
      const propertyTypeMapping: { [key: string]: string } = {
        'single-family': 'HOUSE',
        'condo': 'APARTMENT',
        'townhouse': 'TOWNHOUSE',
        'land': 'LAND',
        'luxury': 'HOUSE',
        'new-construction': 'HOUSE'
      }
      const kwPropertyType = propertyTypeMapping[searchData.propertyType] || 'HOUSE'
      params.append('property_subtype', kwPropertyType)
    }
    
    // Handle location (if provided, could be used for viewport or other location params)
    if (searchData.location) {
      // For now, we'll pass it as a query parameter, but KW might use it differently
      params.append('q', searchData.location)
    }
    
    // Build URL with search type slug
    const searchUrl = `https://stavrosrealtyteam.kw.com/search/${searchData.searchType}?${params.toString()}`
    window.open(searchUrl, '_blank')
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 border border-primary-200">
      <h3 className="text-xl font-semibold text-primary-900 mb-4 text-center">Find Your Dream Home</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">Search Type</label>
          <select 
            name="searchType"
            value={searchData.searchType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          >
            <option value="sale">For Sale</option>
            <option value="sold">Recently Sold</option>
            <option value="rent">For Rent</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={searchData.location}
            onChange={handleInputChange}
            placeholder="Austin, Cedar Park, Leander..."
            className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">Property Type</label>
          <select 
            name="propertyType"
            value={searchData.propertyType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          >
            <option value="any">Any Type</option>
            <option value="single-family">Single Family</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="land">Land</option>
            <option value="luxury">Luxury Homes</option>
            <option value="new-construction">New Construction</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">Min Price</label>
          <select 
            name="minPrice"
            value={searchData.minPrice}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          >
            <option value="any">Any</option>
            <option value="200000">$200K</option>
            <option value="300000">$300K</option>
            <option value="500000">$500K</option>
            <option value="750000">$750K</option>
            <option value="1000000">$1M</option>
            <option value="1500000">$1.5M</option>
            <option value="2000000">$2M</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">Max Price</label>
          <select 
            name="maxPrice"
            value={searchData.maxPrice}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          >
            <option value="any">Any</option>
            <option value="500000">$500K</option>
            <option value="750000">$750K</option>
            <option value="1000000">$1M</option>
            <option value="1500000">$1.5M</option>
            <option value="2000000">$2M</option>
            <option value="3000000">$3M</option>
            <option value="5000000">$5M+</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">Bedrooms</label>
          <select 
            name="bedrooms"
            value={searchData.bedrooms}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          >
            <option value="any">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">Bathrooms</label>
          <select 
            name="bathrooms"
            value={searchData.bathrooms}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          >
            <option value="any">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button 
          onClick={handleSearch}
          className="flex-1 btn-primary flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Search Properties</span>
        </button>
        
        <a 
          href="https://stavrosrealtyteam.kw.com/search" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-center flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span>Advanced Search</span>
        </a>
      </div>
    </div>
  )
}
