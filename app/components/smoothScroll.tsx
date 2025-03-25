export const handleSmoothScroll = (
    e: React.MouseEvent | null, 
    sectionId: string
  ) => {
    if (e) {
      e.preventDefault();
    }
  
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };