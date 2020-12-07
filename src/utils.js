export function isMobile() {
  return typeof window.orientation !== 'undefined' && window.innerWidth < 768;
}

export default {
  isMobile,
};
