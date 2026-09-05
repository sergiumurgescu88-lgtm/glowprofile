import React, { useState, useEffect } from 'react';
import { ProfileData } from './types';
import { DEFAULT_PROFILE } from './data/mockData';
import { Navbar } from './components/Navbar';
import { ToolsNavigationTabs } from './components/ToolsNavigationTabs';
import { Hero } from './components/Hero';
import { ProfileDesigner } from './components/ProfileDesigner';
import { DmcaBadgesTool } from './components/DmcaBadgesTool';
import { ContentSafetyQuizTool } from './components/ContentSafetyQuizTool';
import { FloatingIconsTool } from './components/FloatingIconsTool';
import { TakedownGeneratorTool } from './components/TakedownGeneratorTool';
import { CopyrightRegistrationTool } from './components/CopyrightRegistrationTool';
import { StepGuide } from './components/StepGuide';
import { TipsSection } from './components/TipsSection';
import { PlatformsSection } from './components/PlatformsSection';
import { LeakScanner } from './components/LeakScanner';
import { FaqSection } from './components/FaqSection';
import { WhyUseSection } from './components/WhyUseSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ExportModal } from './components/ExportModal';
import { LeakScannerModal } from './components/LeakScannerModal';
import { GiftModal } from './components/GiftModal';
import { DmcaGuideModal } from './components/DmcaGuideModal';

export default function App() {
  // Load initial profile from localStorage or fallback to default
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('rulta_cam_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading saved profile:', e);
    }
    return DEFAULT_PROFILE;
  });

  // Active highlighted tool tab
  const [activeTool, setActiveTool] = useState<string>('designer');

  // Modals state
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [scannerQuery, setScannerQuery] = useState('');
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [takedownUrl, setTakedownUrl] = useState<string>('');

  // Auto-save to localStorage whenever profile changes
  useEffect(() => {
    try {
      localStorage.setItem('rulta_cam_profile', JSON.stringify(profile));
    } catch (e) {
      console.error('Error saving profile:', e);
    }
  }, [profile]);

  // Navigate to any specific tool and scroll smoothly
  const handleSelectTool = (toolId: string) => {
    setActiveTool(toolId);
    if (toolId === 'scanner') {
      setScannerQuery(profile.stageName);
      setIsScannerOpen(true);
      return;
    }

    const elementMap: Record<string, string> = {
      designer: 'designer',
      badges: 'badges',
      quiz: 'quiz',
      'floating-icons': 'floating-icons',
      takedown: 'takedown',
      copyright: 'copyright',
    };

    const targetId = elementMap[toolId] || toolId;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll to designer
  const scrollToDesigner = () => {
    handleSelectTool('designer');
  };

  // Open scanner with a specific handle
  const handleOpenScannerWithQuery = (query: string) => {
    setScannerQuery(query);
    setIsScannerOpen(true);
  };

  // Switch platform and scroll to designer
  const handleSelectPlatform = (platform: 'chaturbate' | 'mfc' | 'stripchat' | 'bongacams' | 'cam4') => {
    setProfile((prev) => ({ ...prev, targetPlatform: platform }));
    scrollToDesigner();
  };

  // Handle take down action from scanner
  const handleSendTakedownFromScanner = (leakUrl: string) => {
    setTakedownUrl(leakUrl);
    handleSelectTool('takedown');
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-violet-500 selection:text-white font-sans antialiased">
      {/* 1. Rulta Sticky Navigation */}
      <Navbar
        onOpenGift={() => setIsGiftOpen(true)}
        onOpenScanner={() => {
          setScannerQuery(profile.stageName);
          setIsScannerOpen(true);
        }}
        onStartDesigning={scrollToDesigner}
        onSelectTool={handleSelectTool}
        onSelectGuide={(guide) => setSelectedGuide(guide)}
      />

      {/* 2. Interactive Tools Quick-Switcher Tabs Bar */}
      <ToolsNavigationTabs
        activeTool={activeTool}
        onSelectTool={handleSelectTool}
      />

      <main>
        {/* 3. Hero Section */}
        <Hero
          onStartDesigning={scrollToDesigner}
          onOpenScanner={() => {
            setScannerQuery(profile.stageName);
            setIsScannerOpen(true);
          }}
        />

        {/* 4. Tool 1: Interactive Profile Designer Tool */}
        <ProfileDesigner
          profile={profile}
          setProfile={setProfile}
          onFinalize={() => setIsExportOpen(true)}
        />

        {/* 5. Tool 2: Free Piracy & Leak Scanner Section */}
        <LeakScanner onOpenScannerWithQuery={handleOpenScannerWithQuery} />

        {/* 6. Tool 3: Official DMCA Badges Generator Tool */}
        <DmcaBadgesTool
          stageName={profile.stageName}
          onOpenDesigner={scrollToDesigner}
        />

        {/* 7. Tool 4: Content Safety & Piracy Risk Audit Quiz */}
        <ContentSafetyQuizTool
          onOpenScanner={() => {
            setScannerQuery(profile.stageName);
            setIsScannerOpen(true);
          }}
        />

        {/* 8. Tool 5: Floating Protection & Social Icons Generator */}
        <FloatingIconsTool />

        {/* 9. Tool 6: Official DMCA Takedown Notice & Template Generator */}
        <TakedownGeneratorTool
          initialInfringingUrl={takedownUrl}
          initialStageName={profile.stageName}
        />

        {/* 10. Tool 7: US Copyright Office & Statutory Fee Assistant */}
        <CopyrightRegistrationTool />

        {/* 11. Step-by-Step Guide ("How to Create a Stunning Chaturbate Profile") */}
        <StepGuide onStartDesigning={scrollToDesigner} />

        {/* 12. Tips for a Great Profile */}
        <TipsSection />

        {/* 13. Supported Platforms (Chaturbate, MFC, Bongacams, Stripchat, Cam4) */}
        <PlatformsSection onSelectPlatform={handleSelectPlatform} />

        {/* 14. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 15. Why Use a Profile Designer? + Benefits + Attract More Viewers */}
        <WhyUseSection />

        {/* 16. Final Call to Action Banner ("Ready to stand out?") */}
        <CtaBanner onStartDesigning={scrollToDesigner} />
      </main>

      {/* 17. Complete Rulta Official Footer */}
      <Footer
        onSelectTool={handleSelectTool}
        onSelectGuide={(guide) => setSelectedGuide(guide)}
      />

      {/* Modals */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        profile={profile}
      />

      <LeakScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        initialQuery={scannerQuery || profile.stageName}
        onNavigateToDesigner={scrollToDesigner}
        onSendTakedown={handleSendTakedownFromScanner}
      />

      <GiftModal
        isOpen={isGiftOpen}
        onClose={() => setIsGiftOpen(false)}
        onClaim={() => {}}
      />

      <DmcaGuideModal
        isOpen={!!selectedGuide}
        guideTitle={selectedGuide}
        onClose={() => setSelectedGuide(null)}
        onOpenTakedown={() => handleSelectTool('takedown')}
      />
    </div>
  );
}
