declare module "aos" {
  type AOSOptions = {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
  };
  const AOS: {
    init: (options?: AOSOptions) => void;
    refresh?: () => void;
    refreshHard?: () => void;
  };
  export default AOS;
}
