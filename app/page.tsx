"use client"

import React, { useState, useEffect } from "react"
import { CalendlyModal } from "@/components/calendly-modal"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Mic, Brain, Zap, Shield, BarChart3, CheckCircle, Phone, Mail, MapPin, Clock, Users, Headphones, MessageSquare, Star, Globe, Settings, Code2, TestTube, Rocket, Monitor, UserCheck, Calendar, Target, ClipboardList, HeadphonesIcon, CreditCard } from "lucide-react"

export default function AvarixLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 4000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-8 h-8 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-2xl border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-gray-950/95 to-black/95" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Premium Avarix AI Logo */}
            <div className="avarix-logo group">
              <div className="avarix-logo-letter">
                <div className="avarix-letter-a">A</div>
              </div>
              <div className="relative">
                <div className="avarix-logo-text">Avarix AI</div>
                <div className="avarix-tagline">Voice Intelligence</div>
              </div>
            </div>

            {/* Premium CTA Section */}
            <div className="flex items-center">
              {/* Premium CTA Button */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <Button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="relative bg-gradient-to-r from-lime-400 to-emerald-500 text-black hover:from-lime-300 hover:to-emerald-400 font-semibold px-6 sm:px-8 py-3 rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-lime-400/25 text-sm tracking-wide"
                >
                  <span className="flex items-center space-x-2">
                    <span className="hidden sm:inline">Book a Discovery Call</span>
                    <span className="sm:hidden">Book Call</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />
        
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Sophisticated background with floating elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
        
        {/* Premium floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-lime-400/8 to-emerald-500/8 rounded-full blur-3xl premium-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-emerald-400/6 to-lime-500/6 rounded-full blur-3xl premium-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lime-400/4 to-emerald-500/4 rounded-full blur-2xl premium-float-slow" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(163, 230, 53, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Premium badge with sophisticated animation */}
            <div className="premium-slide-up premium-stagger-1">
              <div className="inline-flex items-center space-x-2 bg-lime-400/10 border border-lime-400/20 rounded-full px-4 py-2 premium-glow-pulse backdrop-blur-sm">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-lime-400 tracking-wide">
                  UK Voice AI Agency
                </span>
              </div>
            </div>

            {/* Main headline with premium effects */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white premium-slide-up premium-stagger-2">
                Voice AI That Wins
                <br />
                <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent premium-text-shimmer">
                  Every Call
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-lg premium-slide-up premium-stagger-3">
                Automate your calls, book appointments instantly, and free your team from repetitive tasks. Built for businesses that value efficiency.
              </p>
            </div>

            {/* CTA Button with friction reducers */}
            <div className="flex flex-col items-start gap-4 pt-4 premium-slide-up premium-stagger-4">
              <Button 
                size="lg" 
                onClick={() => setIsCalendlyOpen(true)}
                className="group bg-lime-400 text-black hover:bg-lime-300 font-medium px-8 py-4 text-base rounded-xl premium-scale-hover premium-glow-pulse hover:shadow-2xl hover:shadow-lime-400/25"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-lime-400" />
                  <span>Free 15-Minute Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-lime-400" />
                  <span>No Obligation</span>
                </div>
              </div>
            </div>

            {/* Call Automation Trust Metrics */}
            <div className="pt-12 premium-slide-up premium-stagger-5">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center premium-scale-hover group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-lime-400 mb-1 premium-text-shimmer">
                    89%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-gray-400 transition-colors">Calls Automated</div>
                </div>
                <div className="text-center premium-scale-hover group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-lime-400 mb-1 premium-text-shimmer">
                    2.3s
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-gray-400 transition-colors">Answer Time</div>
                </div>
                <div className="text-center premium-scale-hover group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-lime-400 mb-1 premium-text-shimmer">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-gray-400 transition-colors">Availability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interface Demo */}
          <div className="relative premium-slide-up premium-stagger-3">
            <div className="relative premium-float">
              {/* Sophisticated glow with animation */}
              <div className="absolute -inset-2 bg-gradient-to-r from-lime-400/15 to-emerald-500/15 rounded-2xl blur-2xl premium-glow-pulse" />
              
              {/* Main interface card with premium effects */}
              <div className="relative bg-gray-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-lime-400/10 premium-scale-hover max-w-md mx-auto">
                <div className="space-y-5">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <div className="text-sm text-gray-400 font-medium">Call Dashboard</div>
                  </div>

                  {/* Incoming Call Alert */}
                  <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-400 animate-pulse" />
                        <span className="text-blue-400 text-sm font-medium">Incoming</span>
                      </div>
                      <span className="text-xs text-blue-300 bg-blue-400/20 px-2 py-1 rounded-full">Auto</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-400">Dental Practice</div>
                  </div>

                  {/* Live Conversation */}
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-sm text-gray-300">
                        "Need a dental cleaning appointment"
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-lime-400/10 to-emerald-400/10 rounded-lg p-3 ml-3 border border-lime-400/20">
                      <div className="text-sm text-white font-medium">
                        "Tuesday 2:30 PM available?"
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-lg p-3 ml-3 border border-green-400/20">
                      <div className="text-sm text-green-400 flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span className="text-white font-medium">Booked!</span>
                      </div>
                    </div>
                  </div>

                  {/* Voice visualization */}
                  <div className="flex items-center justify-center py-4">
                    <div className="flex items-end space-x-1">
                      {[...Array(15)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-lime-400 to-emerald-500 rounded-full animate-pulse"
                          style={{
                            width: '3px',
                            height: `${Math.sin(i * 0.5) * 12 + 18}px`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: '1.5s'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Call Automation Metrics */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-500 mb-3 text-center">Today's Performance</div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-base font-semibold text-blue-400">247</div>
                        <div className="text-xs text-gray-500">Calls</div>
                      </div>
                      <div>
                        <div className="text-base font-semibold text-green-400">89</div>
                        <div className="text-xs text-gray-500">Booked</div>
                      </div>
                      <div>
                        <div className="text-base font-semibold text-lime-400">12h</div>
                        <div className="text-xs text-gray-500">Saved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-500">
            <span className="text-xs font-medium tracking-wide">EXPLORE</span>
            <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        {/* Sophisticated background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl premium-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl premium-float-delayed" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20 premium-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-400 tracking-wide">Common Challenges</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-white tracking-tight leading-tight">
              The Hidden Cost of
              <span className="block font-semibold bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Missed Opportunities
              </span>
            </h2>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Problem Card 1 */}
            <div className="group relative premium-slide-up premium-stagger-1">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-700">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-red-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-8 h-8 text-red-400 group-hover:-rotate-12 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-200 transition-colors duration-300">
                  Missed Calls Cost More Than You Think
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-500" />
                    <span>84% of customers won't call back</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-500" />
                    <span>Lost revenue compounds daily</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Card 2 */}
            <div className="group relative premium-slide-up premium-stagger-2">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-700">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-orange-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Clock className="w-8 h-8 text-orange-400 group-hover:rotate-180 transition-transform duration-[3000ms]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-200 transition-colors duration-300">
                  Time is Being Wasted
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-500" />
                    <span>4hrs/day on routine calls</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-500" />
                    <span>Staff stretched too thin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Card 3 */}
            <div className="group relative premium-slide-up premium-stagger-3">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-700">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-8 h-8 text-amber-400 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  Growth is Being Limited
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-500" />
                    <span>Can't scale without more staff</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-500" />
                    <span>Limited by working hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Counter */}
          <div className="mt-20 text-center premium-slide-up premium-stagger-4">
            <div className="inline-flex items-center space-x-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
              <div className="text-2xl font-light text-white">
                <span className="text-red-400">£</span>
                <span className="font-semibold counting-number">147,000</span>
              </div>
              <div className="text-sm text-gray-400">
                Average yearly revenue lost to missed calls
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="platform" className="py-16 lg:py-20 relative overflow-hidden">
        {/* Minimal background with subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-lime-400/[0.02] to-emerald-500/[0.02] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 premium-slide-up premium-stagger-1">
            <div className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-400 tracking-wide">How It Works</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light mb-4 text-white tracking-tight leading-tight">
              Effortless Onboarding,
              <span className="block font-semibold bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                Immediate Results
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              You don't need to be a tech expert. Our team handles the heavy lifting to get your AI agent live and winning calls in a matter of days.
            </p>
          </div>

          {/* Performance Metrics Bar */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-16 premium-slide-up premium-stagger-2">
            <div className="grid grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-lg font-light text-lime-400 mb-1 group-hover:scale-110 transition-transform duration-300">47s</div>
                <div className="text-xs text-gray-400 font-medium tracking-wide">Call Duration</div>
              </div>
              <div className="text-center group">
                <div className="text-lg font-light text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">4</div>
                <div className="text-xs text-gray-400 font-medium tracking-wide">Exchanges</div>
              </div>
              <div className="text-center group">
                <div className="text-lg font-light text-green-400 mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-xs text-gray-400 font-medium tracking-wide">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-lg font-light text-cyan-400 mb-1 group-hover:scale-110 transition-transform duration-300">2.1s</div>
                <div className="text-xs text-gray-400 font-medium tracking-wide">Avg Response</div>
              </div>
            </div>
          </div>

          {/* Three-Step Process Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Step 1: Map Call Flow */}
            <div className="group relative premium-slide-up premium-stagger-2">
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 premium-scale-hover">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-lg">01</span>
                  </div>
                </div>
                <div className="mb-8 mt-6">
                  <div className="w-20 h-20 bg-lime-400/10 border border-lime-400/20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:bg-lime-400/20 transition-all duration-500 premium-glow-pulse">
                    <Phone className="w-10 h-10 text-lime-400 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-lime-100 transition-colors duration-300">
                    We Map Your Perfect Call Flow
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    In a quick discovery call, we'll understand your specific needs—from booking appointments to answering common questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Build & Train */}
            <div className="group relative premium-slide-up premium-stagger-3">
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 premium-scale-hover">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-lg">02</span>
                  </div>
                </div>
                <div className="mb-8 mt-6">
                  <div className="w-20 h-20 bg-emerald-400/10 border border-emerald-400/20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-400/20 transition-all duration-500 premium-glow-pulse">
                    <Brain className="w-10 h-10 text-emerald-400 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-100 transition-colors duration-300">
                    We Build & Train Your AI Agent
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Our experts configure and train your custom voice agent on our platform, ensuring it handles every call with perfect accuracy and professionalism.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Go Live */}
            <div className="group relative premium-slide-up premium-stagger-4">
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 premium-scale-hover">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-lg">03</span>
                  </div>
                </div>
                <div className="mb-8 mt-6">
                  <div className="w-20 h-20 bg-cyan-400/10 border border-cyan-400/20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400/20 transition-all duration-500 premium-glow-pulse">
                    <Rocket className="w-10 h-10 text-cyan-400 group-hover:-translate-y-2 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                    You Go Live & Stop Missing Calls
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    We deploy your agent to your existing phone line. You immediately start capturing more bookings and freeing up your team. It's that simple.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Premium Client Inquiry Form */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        {/* Sophisticated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-lime-400/[0.02] to-emerald-500/[0.02] rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 premium-slide-up premium-stagger-1">
            <div className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-400 tracking-wide">Book Discovery Call</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-white tracking-tight leading-tight">
              Ready to Transform
              <span className="block font-semibold bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Share your vision with our team. We'll design a custom voice AI solution tailored to your specific needs and scale.
            </p>
            </div>

          {/* Premium Form Container */}
          <div className="premium-slide-up premium-stagger-2">
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/10 to-emerald-500/10 rounded-3xl blur-xl opacity-60" />
              
              {/* Main form container */}
              <div className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                
                {/* Form Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
                    <span className="text-lime-400 font-medium text-sm tracking-wide">CONFIDENTIAL CONSULTATION</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Tell us about your automation goals
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Our specialists will respond within 2 hours with a custom proposal.
                  </p>
                </div>

                {/* Form Fields */}
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.querySelector('input[name="name"]') as HTMLInputElement).value;
                  const company = (form.querySelector('input[name="company"]') as HTMLInputElement).value;
                  const email = (form.querySelector('input[name="email"]') as HTMLInputElement).value;
                  const details = (form.querySelector('textarea[name="details"]') as HTMLTextAreaElement).value;

                  const subject = `Discovery Call Request from ${name} at ${company}`;
                  const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nProject Details:\n${details}`;
                  
                  window.location.href = `mailto:Abdullahi.ali@averixai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}>
                  {/* Name and Business Row */}
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name Field */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-lime-400 transition-colors duration-300">
                        Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Smith"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 focus:bg-white/[0.06] transition-all duration-300 group-hover:border-white/20"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400/0 to-emerald-500/0 group-focus-within:from-lime-400/5 group-focus-within:to-emerald-500/5 transition-all duration-300 pointer-events-none" />
                    </div>
                    </div>

                    {/* Business Field */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-lime-400 transition-colors duration-300">
                        Company
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="company"
                          required
                          placeholder="Acme Corporation"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 focus:bg-white/[0.06] transition-all duration-300 group-hover:border-white/20"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400/0 to-emerald-500/0 group-focus-within:from-lime-400/5 group-focus-within:to-emerald-500/5 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>
                </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-lime-400 transition-colors duration-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@acme.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 focus:bg-white/[0.06] transition-all duration-300 group-hover:border-white/20"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400/0 to-emerald-500/0 group-focus-within:from-lime-400/5 group-focus-within:to-emerald-500/5 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-lime-400 transition-colors duration-300">
                      Project Details
                    </label>
                    
                    {/* Quick Prompts */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-3">Quick start prompts:</p>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                          onClick={(e) => {
                            const button = e.target as HTMLButtonElement;
                            const group = button.closest('.group');
                            const textarea = group?.querySelector('textarea') as HTMLTextAreaElement;
                            if (textarea) {
                              textarea.value = "We need to automate our customer service calls and reduce response times...";
                              textarea.focus();
                            }
                          }}
                        >
                          Automate customer service
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                          onClick={(e) => {
                            const button = e.target as HTMLButtonElement;
                            const group = button.closest('.group');
                            const textarea = group?.querySelector('textarea') as HTMLTextAreaElement;
                            if (textarea) {
                              textarea.value = "Looking to implement 24/7 appointment booking for our clinic...";
                              textarea.focus();
                            }
                          }}
                        >
                          24/7 appointment booking
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                          onClick={(e) => {
                            const button = e.target as HTMLButtonElement;
                            const group = button.closest('.group');
                            const textarea = group?.querySelector('textarea') as HTMLTextAreaElement;
                            if (textarea) {
                              textarea.value = "We want to streamline our sales qualification process...";
                              textarea.focus();
                            }
                          }}
                        >
                          Sales qualification
                        </button>
                    </div>
                  </div>

                    <div className="relative">
                      <textarea
                        name="details"
                        required
                        rows={5}
                        placeholder="Describe your current challenges, goals, and how voice AI could transform your operations. Include details about call volume, team size, or specific use cases you have in mind..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 focus:bg-white/[0.06] transition-all duration-300 resize-none group-hover:border-white/20"
                      ></textarea>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400/0 to-emerald-500/0 group-focus-within:from-lime-400/5 group-focus-within:to-emerald-500/5 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                      <Button type="submit" className="relative w-full bg-gradient-to-r from-lime-400 to-emerald-500 text-black hover:from-lime-300 hover:to-emerald-400 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-lime-400/25 text-base tracking-wide">
                        <span className="flex items-center justify-center space-x-2">
                          <span>Book Discovery Call</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                      </div>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Shield className="w-4 h-4" />
                        <span className="text-xs">UK GDPR Compliant</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">2hr Response</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs">No Commitment</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      Sales: <span className="text-gray-300 font-medium">+44 20 7946 0958</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-white">
              FAQ
            </h2>
            <p className="text-gray-400">
              Common questions about our AI voice agents
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {/* Question 1 */}
            <details className="group bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.04] transition-colors">
                <h3 className="text-lg font-medium text-white group-hover:text-lime-100">
                  How long does setup take?
                </h3>
                <div className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Depends on your needs, but most clients see a demo within 3 days and go live within 2-4 weeks. We handle all the technical setup for you.
              </div>
            </details>

            {/* Question 2 */}
            <details className="group bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.04] transition-colors">
                <h3 className="text-lg font-medium text-white group-hover:text-lime-100">
                  Do you handle maintenance and updates?
                </h3>
                <div className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes, we take care of everything—monitoring, fixing issues, updating software, and 24/7 support. You focus on your business while we keep your AI running smoothly.
              </div>
            </details>

            {/* Question 3 */}
            <details className="group bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.04] transition-colors">
                <h3 className="text-lg font-medium text-white group-hover:text-lime-100">
                  Are calls recorded and does it update our CRM?
                </h3>
                <div className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                All calls are securely recorded and automatically update your CRM with appointment details, customer info, and call summaries. Works with Salesforce, HubSpot, and 200+ other platforms.
              </div>
            </details>

            {/* Question 4 */}
            <details className="group bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.04] transition-colors">
                <h3 className="text-lg font-medium text-white group-hover:text-lime-100">
                  Is my data secure?
                </h3>
                <div className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </summary>
                             <div className="px-6 pb-6 text-gray-400">
                 Your data is encrypted and secure with UK Data Protection Act 2018 and UK GDPR compliance. All information stays within the UK and we never share it with third parties.
               </div>
            </details>

            {/* Question 5 */}
            <details className="group bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.04] transition-colors">
                <h3 className="text-lg font-medium text-white group-hover:text-lime-100">
                  What results will I see?
                </h3>
                <div className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Most clients see 60-80% fewer routine calls, 24/7 availability, and happier customers. ROI typically comes within 3-6 months through time savings and improved efficiency.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/5">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Footer Content */}
          <div className="py-12">
            
            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
              <div>
                <h4 className="text-white font-medium text-sm mb-4">Platform</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Voice Studio</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Agent Builder</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Analytics</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Integrations</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium text-sm mb-4">Solutions</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Customer Service</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Appointments</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Sales</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium text-sm mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Press</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium text-sm mb-4">Support</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Help Centre</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Status</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5 pt-8">
              
              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                
                {/* Brand */}
                <div className="avarix-logo group">
                  <div className="avarix-logo-letter">
                    <div className="avarix-letter-a">A</div>
                  </div>
                  <div className="relative">
                    <div className="avarix-logo-text">AverixAI</div>
                    <div className="avarix-tagline">Voice Intelligence</div>
                  </div>
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap items-center space-x-6 text-xs text-gray-500">
                  <span>© 2025 AverixAI Ltd.</span>
                  <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  )
}

