import React, { useEffect, useState } from 'react';
import { Phone, Mail, MessageCircle, Download, Share2, Facebook, Globe, MapPin, Building2, TrendingUp, Shield, PiggyBank, FileText, Heart, Car, UserCheck, Copy, CheckCircle, CaseSensitive as University } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCall = () => {
    window.open('tel:+919835592142', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:finrevsolutions@gmail.com?subject=Financial Consultation Inquiry', '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi Panchanan, I would like to discuss financial planning services.');
    window.open('https://wa.me/919835592142?text=' + message, '_blank');
  };

  const handleWebsite = () => {
    window.open('https://www.finrevsolutions.com', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/FinRevSolutions', '_blank');
  };

  const handleVCFDownload = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Panchanan Kumar
ORG:FinRev Solutions
TITLE:Founder and Financial Advisor
TEL;TYPE=WORK,VOICE:+91-98355-92142
EMAIL;TYPE=WORK:finrevsolutions@gmail.com
URL:https://www.finrevsolutions.com
ADR;TYPE=WORK:;;Dhanbad;Jharkhand;;India
NOTE:AMFI Registered Mutual Fund Distributor - ARN-195797. Secure Today. Stronger Tomorrow.
END:VCARD`;
    
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Panchanan_Kumar_FinRev_Solutions.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleShareWhatsApp = () => {
    const message = encodeURIComponent('Check out Panchanan Kumar, Certified Financial Advisor at FinRev Solutions. AMFI Registered (ARN-195797). Visit: https://www.finrevsolutions.com');
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://www.finrevsolutions.com');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'https://www.finrevsolutions.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleOpenMutualFundAccount = () => {
    window.open('https://www.njindiaonline.com/etada/partintiate.fin?cmdAction=showMenu&njBrcode=32911', '_blank');
  };

  const services = [
    { icon: TrendingUp, title: 'Mutual Funds & SIPs', color: 'text-blue-600' },
    { icon: PiggyBank, title: 'Retirement Planning', color: 'text-green-600' },
    { icon: FileText, title: 'Tax Saving Solutions', color: 'text-amber-600' },
    { icon: Shield, title: 'Term Insurance', color: 'text-red-600' },
    { icon: Heart, title: 'Health Insurance', color: 'text-pink-600' },
    { icon: Car, title: 'Vehicle Insurance', color: 'text-purple-600' },
    { icon: UserCheck, title: 'Personal Accident Policy', color: 'text-indigo-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-poppins">
      {/* Hero Section */}
      <div className={`relative min-h-screen flex flex-col items-center justify-center px-4 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-amber-500/5 pointer-events-none" />
        
        {/* Logo */}
        <div className="mb-8 transform transition-all duration-700 hover:scale-105">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl">
              <Building2 className="w-12 h-12 text-amber-400" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-blue-900" />
            </div>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center tracking-tight">
          FinRev Solutions
        </h1>

        {/* Founder Information */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Panchanan Kumar</h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">Founder and Financial Advisor</p>
          <p className="text-lg text-amber-600 font-semibold italic mb-3">"Secure Today. Stronger Tomorrow."</p>
          <p className="text-gray-600 flex items-center justify-center gap-1">
            <MapPin className="w-4 h-4" />
            Dhanbad, Jharkhand, India
          </p>
        </div>

        {/* Contact Buttons - Now includes Facebook inline */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 w-full max-w-4xl">
          <button
            onClick={handleCall}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Call Now</span>
          </button>
          
          <button
            onClick={handleEmail}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">Email</span>
          </button>
          
          <button
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
          
          <button
            onClick={handleWebsite}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Globe className="w-5 h-5" />
            <span className="hidden sm:inline">Website</span>
          </button>

          <button
            onClick={handleFacebook}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Facebook className="w-5 h-5" />
            <span className="hidden sm:inline">Facebook</span>
          </button>
        </div>

        {/* Our Services Section */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
                <service.icon className={`w-6 h-6 ${service.color}`} />
                <span className="font-medium text-gray-800">{service.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={handleVCFDownload}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Contact
          </button>
          
          <button
            onClick={handleShareWhatsApp}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Share to WhatsApp
          </button>

          <button
            onClick={handleCopyLink}
            className={`${copySuccess ? 'bg-green-500' : 'bg-slate-600'} hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2`}
          >
            {copySuccess ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copySuccess ? 'Copied!' : 'Copy Link'}
          </button>
        </div>

        {/* Mutual Fund Account Opening CTA */}
        <div className="w-full max-w-2xl mx-auto mb-16">
          <div className="bg-slate-50/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 flex items-center gap-6">
            <div className="text-4xl text-blue-600">
              <University className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg text-blue-900 mb-1">
                Open Your Mutual Fund Account Free
              </div>
              <div className="text-slate-600 text-sm">
                Start your investment journey in just 5 minutes!
              </div>
            </div>
            <button
              onClick={handleOpenMutualFundAccount}
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
            >
              Open Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">AMFI Registered Mutual Fund Distributor</p>
          <p className="text-blue-200 text-sm">ARN-195797</p>
          <div className="mt-6 pt-6 border-t border-blue-800">
            <p className="text-blue-200 text-sm">
              © 2024 FinRev Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>

      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white py-4 px-4 z-40 md:block hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-lg">Start your Investment Journey Today!</p>
            <p className="text-blue-200 text-sm">Professional financial guidance for a secure future</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for sticky footer on desktop */}
      <div className="h-24 hidden md:block" />
    </div>
  );
}

export default App;