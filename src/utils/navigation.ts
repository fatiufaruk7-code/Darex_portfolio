/**
 * Smoothly scrolls to a section ID while taking the fixed 80px navbar height into account.
 * Updates the browser URL hash without harsh jumping.
 */
export const scrollToSection = (id: string, updateHash: boolean = true) => {
  if (typeof window === 'undefined') return;

  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (updateHash && window.location.hash !== '' && window.location.hash !== '#home') {
      window.history.pushState(null, '', '#home');
    }
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    if (updateHash) {
      window.history.pushState(null, '', `#${id}`);
    }
  }
};
